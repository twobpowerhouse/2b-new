import { deepMerge } from 'grommet/utils';
import { hpe } from 'grommet-theme-hpe';

const amaronGreen = '#7AC142';
const darkBg = '#181818';

const customTheme = {
  global: {
    colors: {
      brand: amaronGreen,
      background: darkBg,
      text: '#FFFFFF',
      focus: amaronGreen,
      'accent-1': amaronGreen,
      'accent-2': '#222',
      'neutral-1': '#222',
      'neutral-2': '#333',
      'status-ok': amaronGreen,
    },
    font: {
      family: 'Montserrat, Arial, sans-serif',
      size: '18px',
      height: '22px',
    },
  },
  heading: {
    color: amaronGreen,
    weight: 700,
  },
};

export default deepMerge(hpe, customTheme);
