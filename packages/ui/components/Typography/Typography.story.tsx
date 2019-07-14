import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Typography } from "./Typography";

storiesOf("Typography", module)
  .add("with text", () => <Typography text="text"/>)
  .add("with text 2", () => <Typography text="text"/>);