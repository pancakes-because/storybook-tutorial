// for themes, must quit and restart storybook server to see changes
// to quit, do "control c". to start again, do "npm run storybook"

// for creating a custom theme (quick start)
// partners with YourTheme.js to make this work 

import { addons } from '@storybook/manager-api';
import yourTheme from './YourTheme';

addons.setConfig({
  theme: yourTheme,
}); 