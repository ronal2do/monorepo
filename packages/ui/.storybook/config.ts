import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure } from "@storybook/react";
import centered from './decorator';

// automatically import all files ending in *.stories.js
// @ts-ignore
const req = require.context("../components", true, /.story.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(centered);
setOptions({ name: '@boilerplate' });
configure(loadStories, module);