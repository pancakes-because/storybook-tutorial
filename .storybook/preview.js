// note: had to run "npm i msw" to generate the mock server first; only do once 
// got through the tutorial, but didn't seem to work 
// tried the command "npx msw init public", which should genreate a mock server in the public folder
// also did not work 

import '../src/index.css';

 // Registers the msw addon
 import { initialize, mswDecorator } from 'msw-storybook-addon';

 // Initialize MSW
 initialize();

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
 decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;