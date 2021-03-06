import { reversePalette as rp } from 'styled-theme/composer';

const typography: ITypography = {
  H1: {
    fontSize: '1.6em',
  },
};

const palette: IPalette = {
  primary: ['#096dd9', '#1890ff', '#40a9ff'],
  secondary: ['#212121', '#414141', '#616161'],
  danger: ['#cf1322', '#f5222d', '#ff4d4f'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fff', '#eee'],
  grayscale: [
    '#212121',
    '#414141',
    '#616161',
    '#9e9e9e',
    '#bdbdbd',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
};

const reversePalette: IPalette = rp(palette);

const fonts: IFont = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
};

const sizes: ISize = {
  maxWidth: '1100px',
  large: '12em',
  middle: '8em',
  small: '4em',
};

const theme: ITheme = {
  typography,
  palette,
  reversePalette,
  fonts,
  sizes,
};

export default theme;
