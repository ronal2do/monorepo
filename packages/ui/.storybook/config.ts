
import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
// @ts-ignore
const req = require.context("../components", true, /.story.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);