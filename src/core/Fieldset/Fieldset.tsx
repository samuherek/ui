import React from "react";
import clsx from "clsx";
import { BaseProps } from "../types";

export interface FieldsetProps extends BaseProps {
  disabled: boolean;
  component?: any;
}

export const classes = {
  root: "Fieldset",
  disabled: "disabled"
};

function Fieldset({
  className,
  disabled,
  component: ComponentProp,
  ...rest
}: FieldsetProps) {
  const Component = ComponentProp || "fieldset";

  return (
    <Component
      className={clsx(className, classes.root, {
        [classes.disabled]: disabled
      })}
      {...rest}
    />
  );
}

export default Fieldset;
