import React from "react";
import Fieldset from "./Fieldset";

export default {
  title: "Forms/Fieldset",
  component: Fieldset
};

export const Themed = () => {
  return (
    <Fieldset disabled={true}>
      <div>Foo</div>
    </Fieldset>
  );
};
