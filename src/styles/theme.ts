export type ThemeStyled = typeof theme;

export const colors = {
  azure: "#05a8fa",
  battleshipGrey: "#71727a",
  black: "#131314",
  blueGrey: "#888a94",
  blueyGrey: "#a0a2ad",
  brightLilac: "#d564ed",
  charcoalGrey: "#424347",
  cloudyBlue: "#b7bac7",
  dandelion: "#fad311",
  darkGrey: "#2a2b2e",
  ghostWhite: "#fafbff",
  green: "#0ec76a",
  greenTealFour: "#0dba63",
  greenTealThree: "#0db862",
  greenTealTwo: "#0ebf66",
  lightPeriwinkle: "#ced1e0",
  orangeyRed: "#ed3434",
  paleGrey: "#f0f2fa",
  paleLilac: "#dfe1ed",
  paleLilac66: "rgba(223, 225, 237, 0.66)",
  pumpkinOrange: "#f6820d",
  purpleishBlue: "#674ced",
  slateGrey: "#595a61",
  white: "#ffffff",
  darkGreyTwo: "#2a2b2e",
  greenTeal: "#0ec76a",
  greenTeal2: "#0ebf66", // button hover
  greenTeal3: "#0db862", // button
  greenTeal4: "#0dba63", // hover button text color
  paleLilac07: "rgba(223, 225, 237, 0.07)",
  paleLilac10: "rgba(223, 225, 237, 0.10)",
  paleLilac25: "rgba(223, 225, 237, 0.25)",
  paleLilac33: "rgba(223, 225, 237, 0.33)",
  paleLilac40: "rgba(223, 225, 237, 0.40)",
  paleLilac50: "rgba(223, 225, 237, 0.50)"
};

function createTheme(colorsVal: typeof colors) {
  const transformed = Object.keys(colorsVal)
    // @ts-ignore
    .map(c => ({ key: c, value: colorsVal[c] }))
    .map(({ key, value }) => ({ key, value }))
    .reduce((prev, { key, value }) => ({ ...prev, [key]: value }), {});

  return transformed;
}

const theme = {
  base: {
    ...createTheme(colors)
  }
};

if (process.env.NODE_ENV === "development") {
  console.log(theme);
}

export default theme;
