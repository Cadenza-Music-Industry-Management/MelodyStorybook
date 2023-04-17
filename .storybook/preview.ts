import '!style-loader!css-loader!postcss-loader!../components/Melody/src/css/tailwind_output.css';
import '!style-loader!css-loader!postcss-loader!../styles/globals.css';

import type { Preview } from "@storybook/react";
import { DEFAULT_THEME, withTailwindTheme } from './withTailwindTheme.decorator';
import localFont from "next/font/local";

//TODO next/font/local not working, using hacky method for now on Icon component
const melodyIcons = localFont({
  src: '../components/Melody/src/fonts/melody_icons.woff2',
  variable: '--melody-icon-font'
})

document.body.classList.add(melodyIcons.variable);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: "paintbrush",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const decorators = [withTailwindTheme];

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
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
