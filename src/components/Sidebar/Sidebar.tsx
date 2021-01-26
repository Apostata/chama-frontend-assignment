import React, {useState} from 'react'
import {SidebarStyled} from './Sidebar.style'
import { Tooltip } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { menu } from '../../menu'
import {MenuItem} from '../../interfacesNTypes/interfaces'

interface componentProps{
    open: boolean,
    className:string
}

const Sidebar: React.FC<componentProps> = ({open}) => {
    const mountMenu = (menu:MenuItem[], index:number=0) => {
        return menu.map((item, idx) => {
            // let show = false;
            const [show, setShow] = useState<boolean>(false)
            return (
                <li 
                    key={`menu-item-${index}${idx}`} 
                    id={`menu-item-${index}${idx}`} 
                    className={`${show && index > 0? 'rotate':''}`} >
                   
                    <Link 
                        className={``}
                        to={item.url ? item.url : '#'} 
                        title={item.name} >
                            {item.icon? 
                                <span className="linkIcon">
                                    {!open?
                                    <Tooltip arrow 
                                        title={
                                            <span style={!open? { opacity:1} : {opacity:0}} className="tooltipText">{item.name}</span>
                                        } 
                                        placement="right" >
                                        <span>
                                            <item.icon />
                                        </span>
                                    </Tooltip>
                                    :<item.icon />}
                                </span>    
                            : null}
                        <span className={'linkText'}>{item.name}</span>
                    </Link>
                </li>
            )
        })
    }

    return (
        <SidebarStyled className={open ? 'opened': ''}>
           <ul className={'mainMenu'}>
               {mountMenu(menu)}
           </ul>
        </SidebarStyled>
    )
}

export default Sidebar
