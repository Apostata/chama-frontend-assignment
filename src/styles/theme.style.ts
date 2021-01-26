import { BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints';
import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { Palette, PaletteOptions } from '@material-ui/core/styles/createPalette';
import { Typography, TypographyOptions } from '@material-ui/core/styles/createTypography';
import { ComponentsProps } from '@material-ui/core/styles/props';


declare module '@material-ui/core/styles/createMuiTheme' {
    export interface ThemeOptions {
        breakpoints?:  BreakpointsOptions;
        palette?: PaletteOptions;
        props?: ComponentsProps;
        typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
      }
      
      export interface Theme {
        direction: Direction;
        palette: Palette;
        props?: ComponentsProps;
        typography: Typography;
      }
      
      
}
const fontFamily = [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(',')

const theme ={
    typography: {
        fontFamily 
    },
    palette :{
        primary:{
            main: "rgba(71, 134, 255, 1)"
        },
        terciary:{
            main: "rgba(103, 58, 183, 1)"
        },
        grayScale:{
            light: 'rgba(233, 233, 233, 1)',
            main: 'rgba(193, 193, 193, 1)',
            dark: 'rgba(70, 68, 68, 1)'
        },
        transparency:{
            white: 'rgba(255, 255, 255, 0.5)',
            main: "rgba(27, 91, 161, 0.5)"
        },
    }
}

export const NewUiTheme = createMuiTheme(theme)

