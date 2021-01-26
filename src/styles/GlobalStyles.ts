import { Theme } from '@material-ui/core/styles/createMuiTheme'
import {darken} from 'polished'

import { createGlobalStyle } from 'styled-components';
interface propsTheme{
	theme:Theme
}
export const GlobalStyles = createGlobalStyle<propsTheme>`
/* reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* custom globalStyles */
body{
    font-family:"roboto"
}

a{
    color:${props =>props.theme.palette.primary.main};
    text-decoration: none;
    transition: color 300ms ease-in-out 0ms;
    &:hover{
        color:${props=>darken(0.25,props.theme.palette.primary.main)};
    }
}

.alignContentBaseLine{
    align-content: baseline;
}

.paddingLeft15{
    padding-left: 15px;
    box-sizing: border-box;

    @media screen and (max-width:  ${props => props.theme.breakpoints.values.sm}px){
        padding-left:0;
    }
}

.paddingRight15{
    padding-right: 15px;
    box-sizing: border-box;
	@media screen and (max-width:  ${props => props.theme.breakpoints.values.sm}px){
        padding-right:0;
    }
}

.paddingSides15{
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
	@media screen and (max-width:  ${props => props.theme.breakpoints.values.sm}px){
        padding-right:0;
        padding-left:0;
    }
}

.customCard{
    background-color:${props =>props.theme.palette.primary.main};
    width: fit-content;
    min-width: 50px;
    text-align: center;
    padding: 5px 10px;
    margin: 5px;
    color:white;
    transition: background-color 300ms ease-in-out 0ms;
    cursor: pointer;
    &:hover{
        background-color:${props=>darken(0.25,props.theme.palette.primary.main)};
    }
}

`