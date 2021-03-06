import clsx from "clsx";
import React from "react";
import styled from "styled-components";
import Paper from "../Paper";
import Text from "../Typography";

interface SnackbarContentProps {
  className?: string;
  message?: string;
}

export const classes = {
  root: "SnackbarContent",
  message: "message"
};

const PaperStyled = styled(Paper)`
  min-width: 288px;
  max-width: 80vw;
  color: #fff;
  display: flex;
  padding: 6px 16px;
  flex-grow: 1;
  flex-wrap: wrap;
  /* align-items: center; */
  border-radius: 4px;
  background-color: rgb(50, 50, 50);

  .Text {
    padding: 8px 0;
  }
`;

const SnackbarContent = React.forwardRef<unknown, SnackbarContentProps>(
  function SnackbarContent(props, ref) {
    const { className, message, ...rest } = props;

    return (
      // @ts-ignore
      <PaperStyled
        ref={ref}
        // @ts-ignore
        role="alertdialog"
        className={clsx(className, classes.root)}
        elevation={1}
        {...rest}
      >
        <Text className={classes.message}>{message}</Text>
      </PaperStyled>
    );
  }
);

export default SnackbarContent;
