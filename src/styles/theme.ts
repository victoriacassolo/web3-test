// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme, theme as base } from '@chakra-ui/react';
// import { StyleFunctionProps } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5fee5',
      100: '#e1fbb2',
      200: '#cdf781',
      300: '#b8ee56',
      400: '#a2e032',
      500: '#8ac919',
      600: '#71ab09',
      700: '#578602',
      800: '#3c5e00',
      900: '#203300',
    },
  },
  // components: {
  //   Button: {
  //     // 1. We can update the base styles
  //     baseStyle: {
  //       fontWeight: 'bold', // Normally, it is "semibold"
  //     },
  //     // 2. We can add a new button size or extend existing
  //     sizes: {
  //       xl: {
  //         h: '56px',
  //         fontSize: 'lg',
  //         px: '32px',
  //       },
  //     },
  //     // 3. We can add a new visual variant
  //     variants: {
  //       'with-shadow': {
  //         bg: 'red.400',
  //         boxShadow: '0 0 2px 2px #efdfde',
  //       },
  //       // 4. We can override existing variants
  //       solid: (props: StyleFunctionProps) => ({
  //         bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
  //       }),
  //       // 5. We can add responsive variants
  //       sm: {
  //         bg: 'cyan.500',
  //         fontSize: 'md',
  //       },
  //     },
  //     // 6. We can overwrite defaultProps
  //     defaultProps: {
  //       size: 'lg', // default is md
  //       variant: 'sm', // default is solid
  //       colorScheme: 'blue', // default is gray
  //     },
  //   },
  // },
});

export default theme;
