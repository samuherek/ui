import capitalize from "capitalize";
import clsx from "clsx";
import React, { ReactNode } from "react";
import styled from "styled-components";
import ButtonBase from "../../components/ButtonBase";
import {
  PrimaryContained,
  SecondaryContained,
  TertiaryContained
} from "./styles-contained";
import {
  DarkText,
  PrimaryText,
  SecondaryText,
  TertiaryText
} from "./styles-text";

interface Props {
  variant?: "text" | "contained";
  flat?: boolean;
  color?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
  onClick?: any;
  component: any | "button" | "a";
  to?: string;
  disabled?: boolean;
  tabIndex?: string | number;
  href?: string;
  type?: string;
  withNewTab?: boolean;
  className?: string;
  style?: object;
}

export const classes = {
  root: "Button",
  label: "ButtonLabel",
  primaryText: "primary-text",
  primaryContained: "primary-contained",
  secondaryText: "secondary-text",
  secondaryContained: "secondary-contained",
  tertiaryText: "tertiary-text",
  tertiaryContained: "tertiary-contained",
  darkText: "dark-text"
};

const themedComponent = {
  primaryText: PrimaryText,
  primaryContained: PrimaryContained,
  secondaryText: SecondaryText,
  secondaryContained: SecondaryContained,
  tertiaryText: TertiaryText,
  tertiaryContained: TertiaryContained,
  darkText: DarkText
};

const LabelStyled = styled.span`
  /* To make sure text ellipsis are being applied */
  min-width: 0;
`;

const Button = React.forwardRef<Props, any>(function Button(props, ref) {
  const {
    children,
    variant = "text",
    color = "tertiary",
    className,
    disabled,
    onClick,
    ...other
  } = props;

  const key = `${color}${capitalize(variant)}`;
  // @ts-ignore
  const ButtonComponent = themedComponent[key] || ButtonBase;

  const text = variant === "text";
  const contained = variant === "contained";
  const primary = color === "primary";
  const secondary = color === "secondary";
  const tertiary = color === "tertiary";
  const dark = color === "dark";

  return (
    <ButtonComponent
      className={clsx(className, classes.root, {
        [classes.primaryContained]: primary && contained,
        [classes.primaryText]: primary && text,
        [classes.secondaryContained]: secondary && contained,
        [classes.secondaryText]: secondary && text,
        [classes.tertiaryContained]: tertiary && contained,
        [classes.tertiaryText]: tertiary && text,
        [classes.darkText]: dark && text
      })}
      disabled={disabled}
      ref={ref}
      onClick={() => console.log("clicked")}
      {...other}
    >
      <LabelStyled className={classes.label}>{children}</LabelStyled>
    </ButtonComponent>
  );
});

export default Button;
