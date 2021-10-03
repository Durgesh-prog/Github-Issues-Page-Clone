import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

/**
 * @reference https://material-ui.com/customization/default-theme
 * @colors https://material-ui.com/customization/color/#color-tool
 */
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#ffac33',
      main: '#ff9800',
      dark: '#b26a00',
      contrastText: '#000',
    },
    secondary: {
      light: '#1C2226',
      main: '#12121c',
      dark: '#0c0c13',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#121212',
      default: '#1C2226',
    },
  },
  shape: {
    borderRadius: 4,
  },
  custom: {
    colors: {
      blueLight: 'aliceBlue',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    //The overrides key enables you to customize
    // the appearance of all instances of a component type,
    // while the props key enables you to change
    // the default value(s) of a component's props.
  },
});

export default responsiveFontSizes(theme);
