import styled from 'styled-components';

export const StyledLayout = styled.article`
    position: absolute;
    left: 57px;
    top: 70px;
    width: calc(100% - 57px);
    padding: 15px;
    box-sizing: border-box;
    display:flex;  
    transition: all 300ms ease-in-out;
    min-height: calc(100% - 140px);

    &.opened{
        left: calc(307px - 0px);
        width: calc(100% - 307px);
    } 

    @media screen and (max-width:  ${props =>props.theme.breakpoints.values.sm}px ){
		left: 60px;
        width: calc(100% - 60px);

        &.opened{
            left: 60px;
            width: calc(100% - 60px);
        } 
    }   
`