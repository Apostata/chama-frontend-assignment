import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    height: 70px;
    padding: 15px;
    box-sizing: border-box;
    background-color: ${props => props.theme.palette.grayScale.light};
    box-shadow:0px 1px 1px 1px ${props => props.theme.palette.grayScale.main}, inset 0px -1px 2px 0px white;
    display:flex;
    z-index: 1;
    color: ${props => props.theme.palette.primary.main};


    .header-left{
        flex: 1 1 4%;
        min-width: 64px;

        .logo{
            max-width: 75%;
            height: auto;
        }
    }

    .header-right{
        flex: 1 1 96%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .menu-icon{
            position: relative;
            top:0;
            left:0;
            width: 60px;
            height: 100%;
            display: flex;
            justify-content: center;

            .menu-stripe{
                width: 30px;
                height: 6px;
                background-color:  ${props => props.theme.palette.primary.main};
                border-radius: 10px;
                display: block;
                opacity: 1;
                position: absolute;
                transition: all 300ms ease-in-out;

                &.stripe1{
                    top: 7px;
                    left: 0;
                }
                
                &.stripe2{
                    top: 17px;
                    left: 0;
                }

                &.stripe3{
                    top: 27px;
                    left: 0;
                }
            }

           
            &.opened{
                .menu-stripe{
                    &.stripe1{
                        top: -7px;
                        opacity: 0;
                    }

                    &.stripe2{
                        top: 17px;
                        left: 0;
                        transform: rotate(45deg);
                    }

                    &.stripe3{
                        top: 17px;
                        left: 0;
                        transform: rotate(-45deg);
                    }
                }
            }
	    }

        .account{
            display: flex;
            justify-content: space-around;
            align-items: center;
            min-width: 100px;

            .account-button{
                color: ${props => props.theme.palette.primary.main};
                border: 2px solid ${props => props.theme.palette.primary.main};
                min-width: 34px;
                border-radius: 20px;
                padding: 3px;                
            }
        }
    }
    
`