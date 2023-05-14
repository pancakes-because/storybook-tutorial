// for themes, must quit and restart storybook server to see changes
// to quit, do "control c". to start again, do "npm run storybook"

// for creating a custom theme (quick start)
// partners with manager.js to make the custom theme work 

// import { create } from '@storybook/theming/create';

// export default create({
//   base: 'light',
//   brandTitle: 'My custom Storybook',
//   brandUrl: 'https://example.com',
//   brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
//   brandTarget: '_self',
// });

// for creating a custom theme (complex)
// this is the custom theme I made that includes a gif and a green color palette

// import { create } from '@storybook/theming/create';

// export default create({
//   base: 'light',
//   // Typography
//   fontBase: '"Open Sans", sans-serif',
//   fontCode: 'monospace',

//   brandTitle: 'My custom Storybook',
//   brandUrl: 'https://example.com',
//   // brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
//   brandImage: 'https://media.giphy.com/media/SsTcO55LJDBsI/giphy.gif',
//   brandTarget: '_self',

//   //
//   colorPrimary: '#3A10E5',
//   colorSecondary: '#13AA6A',

//   // UI
//   appBg: '#F4FBF8',
//   appContentBg: '#F4FBF8',
//   appBorderColor: '#13AA6A',
//   appBorderRadius: 4,

//   // Text colors
//   textColor: '#000000',
//   textInverseColor: '#ffffff',

//   // Toolbar default and active colors
//   barTextColor: '#000000',
//   barSelectedColor: '#13AA6A',
//   barBg: '#F4FBF8',

//   // Form colors
//   inputBg: '#ffffff',
//   inputBorder: '#10162F',
//   inputTextColor: '000000',
//   inputBorderRadius: 2,
// });

// for creating a custom theme
// this is storybooks default custom theme

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});