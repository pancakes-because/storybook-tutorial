// had some difficulty with the creating the mock service worker, but figured it out through docs 
// help ticket with answer: https://github.com/orgs/nss-evening-web-development/discussions/796 


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