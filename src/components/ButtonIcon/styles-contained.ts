import styled from "styled-components";
import { colorByKey } from "../../styles/utils";
import ButtonBase from "../ButtonBase";

export const ButtonBaseStyled = styled(ButtonBase)`
  text-align: center;
  flex: 0 0 auto;
  border-radius: 50%;
  padding: 9px;
  overflow: visible;
`;

export const PrimaryContained = styled(ButtonBaseStyled)`
  color: var(--white);
  background-color: var(--greenTeal);

  &:hover {
    background-color: var(--greenTeal2);
  }

  &:active,
  &.active {
    background-color: var(--greenTeal3);
  }
`;

export const SecondaryContained = styled(ButtonBaseStyled)`
  color: ${colorByKey("battleshipGrey")};
  background: ${colorByKey("paleLilac50")};

  &:hover {
    color: ${colorByKey("battleshipGrey")};
    background: ${colorByKey("paleLilac66")};
  }

  &:active,
  &.active {
    background: ${colorByKey("paleLilac")};
  }
`;

export const DangerContained = styled(ButtonBaseStyled)`
  color: ${colorByKey("cloudyBlue")};
  background-color: ${colorByKey("paleLilac25")};

  &:hover {
    color: ${colorByKey("white")};
    background: ${colorByKey("orangeyRed")};
  }

  &:active,
  &.active {
    background: ${colorByKey("orangeyRed")};
  }

  &:disabled,
  &.disabled,
  &:disabled:hover,
  &:disabled:active,
  &.disabled:hover,
  &:disabled:active {
    opacity: 0.66;
    color: ${colorByKey("cloudyBlue")};
    background-color: ${colorByKey("paleLilac25")};
  }
`;
