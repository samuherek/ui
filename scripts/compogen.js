const watch = require("watch");
const argv = require("minimist")(process.argv.slice(2));
const ncp = require("ncp").ncp;
const rimraf = require("rimraf");
const path = require("path");
const fs = require("fs").promises;
const chalk = require("chalk");
const util = require("util");
const mkdirp = require("mkdirp");

const config = {
  src: ".compogen"
};

async function updateAndCopyFile({ filePath, name, fileName, outDir }) {
  const data = await fs.readFile(filePath, "utf-8");

  const nextData = data.replace(/NAME/g, name);
  const nextName = fileName.replace(/NAME/g, name);

  // In case the directory does not exist, let's creat it
  await mkdirp(outDir);
  // console.log(destDir, nextName);

  // Let's create the new file with changes
  await fs.writeFile(path.resolve(outDir, nextName), nextData);
}

// TODO: make into recursion for easier understanding
async function walkUpdateAndCopyItems({ dir, pathName, name, outputDir }) {
  const resolvedPath = path.resolve(dir, pathName);
  const stat = await fs.lstat(resolvedPath);

  if (stat.isDirectory()) {
    const dirPath = path.resolve(dir, pathName);
    const items = await fs.readdir(dirPath);

    await Promise.all(
      items.map(name2 =>
        updateAndCopyFile({
          filePath: path.resolve(resolvedPath, name2),
          name,
          fileName: name2,
          outDir: path.resolve(outputDir, name, pathName)
        })
      )
    );
    return;
  }

  if (stat.isFile()) {
    await updateAndCopyFile({
      filePath: resolvedPath,
      name,
      fileName: pathName,
      outDir: path.resolve(outputDir, name)
    });
  }
}

async function init() {
  if (argv._.length === 0) {
    throw new Error("Compogen requires commands");
  }

  if (argv._[0] === "core") {
    const { output, name } = argv;

    if (!output) {
      throw new Error("Output is not specified");
    }

    if (!name) {
      throw new Error("Name is not specified");
    }

    const dir = path.resolve(config.src, "core");
    const outputDir = path.resolve(argv.output);
    // console.log(outputDir);
    const res = await fs.readdir(dir);

    await Promise.all(
      res.map(pathName =>
        walkUpdateAndCopyItems({
          dir,
          pathName,
          name,
          outputDir
        })
      )
    );
  }
}

init();
