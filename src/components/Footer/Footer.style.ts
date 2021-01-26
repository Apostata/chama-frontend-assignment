import styled from 'styled-components';

export const FooterStyled = styled.footer`
    z-index: 1;
	background-color:  ${props => props.theme.palette.primary.main};
	min-height: 85px;
	padding: 15px 20px;
	width: 100%;
	color: white;
	position: absolute;
	bottom: 15px;
	left: 0;
	box-sizing: border-box;
	font-size: 0.8rem;
	display: flex;
    transform: translate(0%, 100%);

	.institutionalContainer{
		display: flex;
		justify-content: flex-start;
		align-content: center;

		p{
			display: flex;
			align-self: center;
			box-sizing: border-box;
			padding: 0 15px;
		}
	}
    
    @media screen and (max-width:  ${props => props.theme.breakpoints.sm}){
		font-size:0.7rem;
		bottom: 15px;
		min-height: auto;
		height: auto;
    }
`