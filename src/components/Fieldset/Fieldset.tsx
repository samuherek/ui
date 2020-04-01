import React from "react";
import clsx from "clsx";
import styled from "styled-components";

export interface FieldsetProps {
  disabled: boolean;
  className?: string;
  children?: any;
}

export const classes = {
  root: "Fieldset"
};

const FieldsetStyled = styled.fieldset`
  border: none;
`;

function Fieldset({ className, disabled, ...rest }: FieldsetProps) {
  return (
    <FieldsetStyled
      className={clsx(className, classes.root)}
      style={{ opacity: disabled ? 0.5 : 1 }}
      {...rest}
    />
  );
}

export default Fieldset;
