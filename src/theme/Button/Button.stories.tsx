import React from "react";
import Button from "./Button";

export default {
  title: "Buttons/Button",
  component: Button
};

export const Themes = () => (
  <>
    <div>
      <Button color="primary" variant="contained">
        Button
      </Button>
      <Button color="secondary" variant="contained">
        Button
      </Button>
      <Button color="tertiary" variant="contained">
        Button
      </Button>
      <Button color="dark" variant="contained">
        Button
      </Button>
    </div>
    <div>
      <Button color="primary">Button</Button>
      <Button color="secondary">Button</Button>
      <Button color="tertiary">Button</Button>
      <Button color="dark">Button</Button>
    </div>
  </>
);
