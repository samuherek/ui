import React from "react";
import ButtonCore, { ButtonCoreProps } from "../ButtonCore";

export interface ButtonCoreLinkProps extends ButtonCoreProps {}

const ButtonCoreLink = React.forwardRef<any, ButtonCoreLinkProps>(
  (props, ref) => {
    // FIXME: not sure how to type the ref
    // @ts-ignore
    return <ButtonCore ref={ref} component="a" {...props} />;
  }
);

export default ButtonCoreLink;
