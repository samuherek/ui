import styled from "styled-components";
import ButtonBase from "../ButtonBase";
import { colorByKey } from "../../styles/utils";

const ButtonBaseStyled = styled(ButtonBase)`
  position: relative;
  font-weight: 500;
  letter-spacing: 0.8px;

  &:disabled,
  &.disabled {
    cursor: default;
    pointer-events: none;
  }
`;

// #0ec76a
export const PrimaryText = styled(ButtonBaseStyled)`
  color: ${colorByKey("greenTeal")};

  &:hover,
  &.hover {
    color: ${colorByKey("greenTeal2")};
  }

  &:active,
  &.active {
    color: ${colorByKey("greenTeal3")};
  }

  &:disabled,
  &.disabled,
  &:disabled:hover,
  &:disabled:active,
  &.disabled:hover,
  &:disabled:active {
    opacity: 0.33;
    color: ${colorByKey("greenTeal")};
  }
`;

// #ffffff
export const SecondaryText = styled(ButtonBaseStyled)`
  color: ${colorByKey("blueyGrey")};

  &:hover,
  &.hover {
    color: ${colorByKey("greenTeal4")};
  }

  &:active,
  &.active {
    color: ${colorByKey("greenTeal4")};
  }

  &:disabled,
  &.disabled,
  &:disabled:hover,
  &:disabled:active,
  &.disabled:hover,
  &.disabled:active {
    opacity: 0.5;
    color: ${colorByKey("blueGrey")};
  }
`;

export const TertiaryText = styled(ButtonBaseStyled)`
  color: ${colorByKey("cloudyBlue")};

  &:hover,
  &.hover {
    color: ${colorByKey("blueyGrey")};
  }

  &:active,
  &.active {
    color: ${colorByKey("blueGrey")};
  }

  &:disabled,
  &.disabled,
  &:disabled:hover,
  &:disabled:active,
  &.disabled:hover,
  &:disabled:active {
    opacity: 0.66;
    color: ${colorByKey("cloudyBlue")};
  }
`;

export const DarkText = styled(ButtonBaseStyled)`
  color: ${colorByKey("cloudyBlue")};

  &:hover,
  &.hover {
    color: ${colorByKey("paleLilac")};
  }

  &:active,
  &.active {
    color: ${colorByKey("paleLilac")};
  }

  &:disabled,
  &.disabled,
  &:disabled:hover,
  &:disabled:active,
  &.disabled:hover,
  &:disabled:active {
    opacity: 0.66;
    color: ${colorByKey("cloudyBlue")};
  }
`;
