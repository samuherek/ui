import React from "react";
import { render } from "../../../test-utils/test-utils";
import Dialog from "../Dialog";

test("<Dialog /> should match snapshot", () => {
  const { container } = render(<Dialog isOpen={true}>button</Dialog>);
  expect(container.firstChild).toMatchSnapshot();
});
