import { createGlobalStyle } from "styled-components";
import { colorByKey } from "./utils";

const GlobalStyles = createGlobalStyle`
:root {
  --primary: blue;
  --primary-shadow: rgba(0,0,250, 0.2);
  /* --primary: ${colorByKey("greenTeal")};
  --primary-hover: ${colorByKey("greenTeal2")};
  --primary-active: ${colorByKey("greenTeal3")};
  --primary-disabled: ${colorByKey("greenTeal")};
  --tertiary: ${colorByKey("paleLilac25")};
  --tertiary-hover: ${colorByKey("paleLilac40")};
  --tertiary-active: ${colorByKey("paleLilac50")};
  --tertiary-disabled: ${colorByKey("paleLilac25")}; */
  /* --white: white; */

  --blueGrey: #888a94;
  /* battleshipGrey: "#71727a",
  black: "#131314",
  blueyGrey: "#a0a2ad",
  brightLilac: "#d564ed",
  charcoalGrey: "#424347",
  dandelion: "#fad311",
  ghostWhite: "#fafbff",
  lightPeriwinkle: "#ced1e0",
  orangeyRed: "#ed3434",
  paleGrey: "#f0f2fa",
  pumpkinOrange: "#f6820d",
  purpleishBlue: "#674ced",
  slateGrey: "#595a61", */
  --white: #ffffff;
  /* darkGreyTwo: "#2a2b2e", */
  --greenTeal: #0ec76a;
  /* // button hover */
  --greenTeal2: #0ebf66;
  /* // button */
  --greenTeal3: #0db862;
  /* // hover button text color */
  --greenTeal4: #0dba63;
  --greenTealShadow: rgba(7, 97, 52, 0.24);
  /*    paleLilac33: "rgba(223, 225, 237, 0.33)",
 */
  --darkGrey: #2a2b2e;
  --cloudyBlue: #b7bac7;
  --paleLilac: #dfe1ed;
  --paleLilac07: rgba(223, 225, 237, 0.07);
  --paleLilac10: rgba(223, 225, 237, 0.10);
  --paleLilac25: rgba(223, 225, 237, 0.25);
  --paleLilac40: rgba(223, 225, 237, 0.40);
  --paleLilac50: rgba(223, 225, 237, 0.50);
  --paleLilac66: rgba(223, 225, 237, 0.66);
}

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  position: relative;
  background: #F9FAFF;
}
`;

export default GlobalStyles;
