import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
const { jsxDecorator } = require("storybook-addon-jsx");
import { ThemeProvider } from 'styled-components';
import lightTheme from '../../ui-kit/src/Atoms/Themes/light';
import { GlobalStyles } from '../../ui-kit/src/Atoms/GlobalStyles';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});

addDecorator(GlobalWrapper);


addDecorator(jsxDecorator);

// export const globalTypes = {
//   locale: {
//     name: 'Locale',
//     description: 'Internationalization locale',
//     defaultValue: 'en',
//     toolbar: {
//       icon: 'globe',
//       items: [
//         { value: 'en', right: '🇺🇸', title: 'English' },
//         { value: 'fr', right: '🇫🇷', title: 'Français' },
//         { value: 'es', right: '🇪🇸', title: 'Español' },
//         { value: 'zh', right: '🇨🇳', title: '中文' },
//         { value: 'kr', right: '🇰🇷', title: '한국어' },
//       ],
//     },
//   },
// };
