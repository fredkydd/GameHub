import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// *Add your color mode config
// *We choose initial value.
// *App color mode is detached from system color mode changes.
// !You've to delete localstorage to see the updates
const config: ThemeConfig = {
  initialColorMode: 'dark', // dark , light
  useSystemColorMode: true,
};

// *extend the theme
const theme = extendTheme({ config });

export default theme;
