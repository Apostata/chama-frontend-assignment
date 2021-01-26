import React from 'react'
import {FooterStyled} from './Footer.style'

const Footer: React.FC = () => {
    return (
        <FooterStyled>
            @chama {new Date().getFullYear()}
        </FooterStyled>
    )
}

export default Footer
