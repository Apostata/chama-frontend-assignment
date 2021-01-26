import React, {useState} from 'react'
// import { Grid, Button, Menu, MenuItem } from '@material-ui/core'
import { HeaderStyled } from './Header.style'
import logo from '../../img/chamaLogo.png'
interface componentProps{
    setOpen: Function,
    open: boolean,
}

const Header: React.FC<componentProps> = props =>{
    const {setOpen, open} = props;
    const [showMenu, setShowMenu] = useState(false)
    return (
        <HeaderStyled className={open ? 'opened': ''}>
           <div className={'header-left'}>
           <img className="logo" src={logo} />
           </div>
           <div className={'header-right'}>
                <div className={`menu-icon ${open ? 'opened': ''}`} onClick={()=>setOpen(!open)}>
                    <span className={`menu-stripe stripe1`}></span>
                    <span className={`menu-stripe stripe2`}></span>
                    <span className={`menu-stripe stripe3`}></span>
                </div>
           </div>
        </HeaderStyled>
    )
}

export default Header;