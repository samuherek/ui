import styled from "styled-components";
import ButtonBase from "../../components/ButtonBase";

const ButtonBaseStyled = styled(ButtonBase)`
  position: relative;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: var(--color);
  background-color: var(--background);

  &:hover,
  &.hover {
    color: var(--color-hover);
    background-color: var(--background-hover);
  }

  &:active,
  &.active {
    color: var(--color-active);
    background-color: var(--background-active);
  }

  &:disabled,
  &.disabled,
  &:disabled:hover,
  &:disabled:active,
  &.disabled:hover,
  &:disabled:active {
    color: var(--color-disabled);
    background-color: var(--background-disabled);
    cursor: default;
    pointer-events: none;
  }
`;

export const PrimaryContained = styled(ButtonBaseStyled)`
  --color: var(--white);
  --background: var(--primary);

  --color-hover: var(--primary);
  --background-hover: var(--white);

  --color-active: var(--primary);
  --background-active: var(--primary-shadow);

  --color-disabled: var(--white);
  --background-disabled: var(--primary);

  box-shadow: 0 0 0 1px var(--primary), 0 2px 4px -1px var(--primary-shadow);

  &:hover,
  &.hover {
    box-shadow: 0 0 0 1px var(--white);
  }

  &:active,
  &.active {
    box-shadow: 0 0 0 1px var(--primary);
  }

  &:disabled,
  &.disabled,
  &:disabled:hover,
  &:disabled:active,
  &.disabled:hover,
  &:disabled:active {
    opacity: 0.33;
    box-shadow: 0 0 0 1px var(--primary);
  }
`;

export const SecondaryContained = styled(ButtonBaseStyled)`
  --color: var(--white);
  --background: var(--primary);

  --color-hover: var(--primary);
  --background-hover: var(--white);

  --color-active: var(--primary);
  --background-active: var(--primary-shadow);

  --color-disabled: var(--white);
  --background-disabled: var(--primary);

  box-shadow: 0 0 0 1px var(--primary), 0 2px 4px -1px var(--primary-shadow);

  &:hover,
  &.hover {
    box-shadow: 0 0 0 1px var(--white);
  }

  &:active,
  &.active {
    box-shadow: 0 0 0 1px var(--primary);
  }

  &:disabled,
  &.disabled,
  &:disabled:hover,
  &:disabled:active,
  &.disabled:hover,
  &:disabled:active {
    opacity: 0.33;
    box-shadow: 0 0 0 1px var(--primary);
  }
`;

export const TertiaryContained = styled(ButtonBaseStyled)`
  --color: var(--white);
  --background: var(--primary);

  --color-hover: var(--primary);
  --background-hover: var(--white);

  --color-active: var(--primary);
  --background-active: var(--primary-shadow);

  --color-disabled: var(--white);
  --background-disabled: var(--primary);

  box-shadow: 0 0 0 1px var(--primary), 0 2px 4px -1px var(--primary-shadow);

  &:hover,
  &.hover {
    box-shadow: 0 0 0 1px var(--white);
  }

  &:active,
  &.active {
    box-shadow: 0 0 0 1px var(--primary);
  }

  &:disabled,
  &.disabled,
  &:disabled:hover,
  &:disabled:active,
  &.disabled:hover,
  &:disabled:active {
    opacity: 0.33;
    box-shadow: 0 0 0 1px var(--primary);
  }
`;
