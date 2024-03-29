const theme = {
  colors: {
    brand_color: '#FF6666',
    white: '#FFFFFF',
    grey_v1: '#333333',
    grey_v2: '#e8e8e8',
    grey_v3: '#f3f3f3',
    grey_v4: '#999999',
  },
  flexboxgrid: {
    gridSize: 24, // columns
    gutterWidth: 1, // rem
    outerMargin: 0.5, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
  radius: {
    normal: '0.375rem', // 6px
    pill: '1.87rem', // 30px
    circle: '50%',
    none: '0',
  },
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  sizes: {
    base: '0.062rem', // 1px
    xxxxsmall: '0.125rem', // 2px
    xxxsmall: '0.25rem', // 4px
    xxsmall: '0.5rem', // 8px
    xsmall: '0.75rem', // 12px
    small: '0.875rem', // 14px
    medium: '1rem', // 16px
    xmedium: '1.25rem', // 20px
    large: '1.5rem', // 24px
    xlarge: '1.75rem', // 28px
    xxlarge: '2rem', // 32px
    xxxlarge: '2.5rem', // 40px
    xxxxlarge: '3rem', // 48px
  },
  fonts: {
    roboto: 'Roboto, Arial, sans-serif',
  },
};
export default theme;
