import styled from 'styled-components';

export const HomeStyled = styled.article`
    width: 100%;

    form{
        width: 100%;
        padding-bottom:30px;
        border-bottom: 1px solid ${props =>props.theme.palette.primary.main};

        .label{
            justify-content: flex-end;
            color:${props =>props.theme.palette.primary.main};
            display: flex;
            align-items: center;
            @media screen and (max-width:  ${props => props.theme.breakpoints.values.sm}px){
                justify-content: flex-start;
            }
        }

        .searchButton{
            padding: 0px 0px;
            border-radius: 0 10px 10px 0;
            min-width: 35px;

            span{
                display: flex;
                align-items: center;
                min-height: 32px;
            }
        }
    }

    .content{
       padding: 30px;
    }
    

    .leftContent{
        align-items: center;
        display: flex;
        flex-flow: column wrap;
    }

    .about{
        flex-basis: auto;
        padding: 15px;

        p{
            margin: 10px 0;
            line-height: 1.2;
            span{
                color:${props =>props.theme.palette.primary.main};
                padding: 0 5px 0 0;
            }
        }
    }
   
    .name{
        color: ${props =>props.theme.palette.primary.main};
        font-size: 2rem;
        margin: 15px 0;
    }

    .image{
        border-radius: 50%;
        border: 3px solid ${props =>props.theme.palette.primary.main};
        max-width: 300px;
    }

    .titles{
        font-size: 1.4rem;
        color: ${props =>props.theme.palette.primary.main};
        margin: 15px 0;
        border-bottom: 1px solid ${props =>props.theme.palette.primary.main};
        padding-bottom: 10px;
    }

    .emptySearch{
        display: flex;
        width:100%;
        justify-content: center;
        padding: 30px 0;
        color: ${props =>props.theme.palette.grayScale.main}
    }

    .histories{
        display: flex;
        flex-flow: row wrap;
    }
`