import { addParameters, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import theme from "../src/styles/theme";
import GlobalStyles from "../src/styles/global";
import { ThemeProvider } from "styled-components";

function withGlobalStyles(story) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <div style={{ padding: 25 }}>{story()}</div>
      </React.Fragment>
    </ThemeProvider>
  );
}

addDecorator(withGlobalStyles);
addDecorator(withKnobs);

addParameters({
  options: {
    brandTitle: "CRA TypeScript Kitchen Sink",
    brandUrl:
      "https://github.com/storybookjs/storybook/tree/master/examples/cra-ts-kitchen-sink",
    showRoots: true
  }
});
