const watch = require("watch");
const argv = require("minimist")(process.argv.slice(2));
const ncp = require("ncp").ncp;
const rimraf = require("rimraf");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

// ncp.limit = 16;

function readConfig() {
  const file = fs.readFileSync(path.resolve(".watcher.json"), "utf-8");
  if (!file) {
    throw new Error(`No .watcher.json file found in ${path.dirname}`);
  }

  try {
    return JSON.parse(file);
  } catch (e) {
    throw new Error(e);
  }
}

function getLinkDirectories(config) {
  if (!config.links && !Array.isArray(config.links)) {
    throw new Error("No directories linked. There is no reason to use watcher");
  }
  return config.links;
}

function getWatchDirectory(config) {
  if (!config.watchDir) {
    throw new Error("No watch directory is specified");
  }
  return config.watchDir;
}

function getAllowedSubdirectories(config) {
  if (!config.allowedSubdirectories) {
    throw new Error("No subdirectories are specified in the filter");
  }
  return config.allowedSubdirectories;
}

const config = readConfig();
const linkedDirs = getLinkDirectories(config);
const watchSourceDir = getWatchDirectory(config);
const allowedSubdirectories = getAllowedSubdirectories(config);

// const watchPath = "/Users/samuherek/Documents/Websites/ui/src";
// const watchDirs = ["components", "transitions", "utils"];

console.log(chalk.bgGreen(chalk.white(" WATCHER: started ")));
// OVERWRITE
// get rid of the whole folder and copy all files
// as new.
if (argv._[0] === "overwrite") {
  // const { output } = argv;

  // if (!output) {
  //   throw new Error("'output' option is required for overwrite");
  // }
  console.log(chalk.yellow("Overwriting initialized"));

  // First get rid of the old stuff completely
  linkedDirs.forEach(outputDir => {
    console.log(chalk.red("Removing: "), outputDir);

    rimraf(outputDir, () => {
      // Since we deleted the main folder, we need to create
      // the placeholder subdirectories.
      fs.mkdirSync(outputDir);

      allowedSubdirectories.forEach(dirName => {
        const dirPath = path.join(watchSourceDir, dirName);
        const outputPath = path.join(outputDir, dirName);

        // Now copy everything in each subdirectory
        ncp(dirPath, outputPath, function(err) {
          if (err) {
            return console.error(err);
          }
          console.log(chalk.green("Copy: "), dirName, "->", outputDir);
        });
      });
    });
  });
}

// WATCH
// Watch the directory for any changes and apply it to the
// output paths.
if (argv._[0] === "watch") {
  console.log(chalk.yellow("Watching initialized"));

  watch.watchTree(watchSourceDir, function(filePath, curr, prev) {
    const parsedPath =
      typeof filePath !== "object" ? path.parse(filePath) : null;

    const dirPathAfterSrc = parsedPath
      ? parsedPath.dir.split(watchSourceDir).pop()
      : null;

    const changeInDir = parsedPath ? dirPathAfterSrc.split("/")[1] : null;

    // console.log(parsedPath, changeInDir);

    if (typeof filePath == "object" && prev === null && curr === null) {
      // Finished walking the tree
      console.log(chalk.green("Watching "), watchSourceDir);
      return;
    }

    if (!allowedSubdirectories.find(dir => dir === changeInDir)) {
      return;
    } else if (prev === null) {
      // f is a new file
      linkedDirs.forEach(outputDir => {
        const outputPath = path.join(
          outputDir,
          dirPathAfterSrc,
          parsedPath.base
        );

        // Now copy everything in each subdirectory
        ncp(filePath, outputPath, function(err) {
          if (err) {
            return console.error(err);
          }
          console.log(chalk.green("New: "), parsedPath.base, "->", outputPath);
        });
      });
    } else if (curr.nlink === 0) {
      // f was removed
      linkedDirs.forEach(outputDir => {
        const outputPath = path.join(
          outputDir,
          dirPathAfterSrc,
          parsedPath.base
        );

        rimraf(outputPath, () => {
          console.log(chalk.red("Removing: "), outputPath);
        });
      });
    } else {
      // f was changed

      linkedDirs.forEach(outputDir => {
        const outputPath = path.join(
          outputDir,
          dirPathAfterSrc,
          parsedPath.base
        );

        // Now copy everything in each subdirectory
        ncp(filePath, outputPath, function(err) {
          if (err) {
            return console.error(err);
          }
          console.log(
            chalk.green("Change: "),
            parsedPath.base,
            "->",
            outputPath
          );
        });
      });
    }
  });
}
