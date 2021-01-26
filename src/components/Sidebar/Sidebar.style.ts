import styled, { keyframes } from 'styled-components';
import { darken } from 'polished'

const ripple = keyframes`
    0% {
        transform: scale(0, 0);
        opacity: 1;
    }
    20% {
        transform: scale(25, 25);
        opacity: 1;
    }

    50% {
        opacity: 1;
        transform: scale(75, 75);
    }
    100% {
        opacity: 0;
        transform: scale(40, 40);
    }
`

export const SidebarStyled = styled.aside`
    position: fixed;
    left: 0;
    top: 70px;
    width: 307px;
    height: calc(100% - 70px);
    box-sizing: border-box;
    background-color: ${props => props.theme.palette.primary.main};
    box-shadow: 1px 0px 2px 1px ${props => props.theme.palette.grayScale.main};
    display:flex;
    transform: translate(-250px, 0px);
    transition: all 300ms ease-in-out;
    z-index:2;

    .mainMenu{
        width: 100%;
        overflow: auto;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 15px;
            height: 15px;
            border:1px solid black;
        }

        ul{
            width: 100%;
            box-sizing: border-box;
            max-height:0;
            opacity:0;
            transition: background-color 500ms ease-in-out, max-height 500ms ease-in-out, opacity 250ms ease-in-out;              
        }

        li{
            width: 100%;  

            a{
                display: flex;
                align-content: center;
                color: ${props => props.theme.palette.common.white};
                text-decoration: none;
                box-sizing: border-box;
                padding: ${props => props.theme.spacing(2)}px;
                transition: all 300ms ease-in-out 0ms; 
                position: relative;
                overflow: hidden;

                .linkIcon{
                    position: relative;
                    left: calc(100% - 25px);
                    width: 30px;
                    max-width: 30px;
                    display: block;
                    transform: rotate(0deg);
                    text-align: center;
                    transition: all 300ms ease-in-out;
                }

                .linkText{
                    width: calc(100% - 30px);
                    display: inline-block;
                    padding-left:  ${props => props.theme.spacing(2)}px;
                }
                
            
                &:hover{
                }

                &:focus:not(:active):after {
                    animation: ${ripple} 750ms ease-out;
                }

                .linkText{
                    transition: width 600ms ease-in-out 2ms, opacity 600ms ease-in-out 2ms; 
                }
                
                &:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 5px;
                    height: 5px;
                    background: ${props => props.theme.palette.transparency.white};
                    opacity: 0;
                    border-radius: 100%;
                    transform: scale(1, 1) translate(-50%);
                    transform-origin: 50% 50%;
                }

            }

            &.rotate{
                a{
                    .linkIcon{
                        transform: rotate(180deg);
                    }
                }
            }
        }

        ul{
            li{
               
                a{
                    max-height:0;
                    opacity:0;  
                    padding: ${props => props.theme.spacing(0)}px;
                    transition: all 300ms ease-in-out 201ms;
                }
            }
        }
       
        &>li>a{
            text-transform: uppercase;

            &:before {
                content: '';
                position: absolute;
                top: 2%;
                left: calc(100% - 56px);
                width: 2px;
                height: 96%;
                display: block;
                background: ${props => props.theme.palette.common.white};
                transition: all 300ms ease-in-out 0ms; 
                
                @media screen and (max-width:  ${props =>props.theme.breakpoints.values.sm}px ){
                    left: calc(100% - 59px);
                }
            }
        }
    }

    &.opened{
        transform: translate(0%, 0%);

        li{
            a{
                .linkIcon{
                    left: 0;
                    text-align: center;
                    transition: rotate 300ms ease-in-out;
                }

                &:before{
                    left: 1px;
                }
            }
        }

        .show{
            max-height: 10000px;
            opacity:1;   
            transition: background-color 250ms ease-in-out, max-height 500ms ease-in-out, opacity 500ms ease-in-out; 

            li{
                a{
                    padding: ${props => props.theme.spacing(2)}px;
                    max-height: 1000px;
                    opacity: 1;
                }
            }             
        }

    }

    ul{
        ul{
            background-color: ${props=>darken(0.05,props.theme.palette.primary.main)};
            li a {  padding-left: ${props => props.theme.spacing(2)}px; }
            ul{
                background-color: ${props=>darken(0.1,props.theme.palette.primary.main)};
                li a {  padding-left: ${props => props.theme.spacing(3)}px; }
                ul{
                    background-color: ${props=>darken(0.15,props.theme.palette.primary.main)};
                    li a {  padding-left: ${props => props.theme.spacing(4)}px; }
                    ul{
                        background-color: ${props=>darken(0.2,props.theme.palette.primary.main)};
                        li a {  padding-left: ${props => props.theme.spacing(5)}px; }
                    }
                }
            }
        }
    }


    @media screen and (max-width:  ${props =>props.theme.breakpoints.values.sm}px ){
        box-shadow: 0px 0px 2px 0px ${props => props.theme.palette.grayScale.main};
		left: 0px;
        width: 300px;
        transform: translate(-240px, 0px);
    }
`

