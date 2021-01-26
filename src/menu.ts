import React from 'react'
import {MenuItem} from './interfacesNTypes/interfaces'
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';

export const menu: MenuItem[] = [
    {
        name:'Home',
        icon: HomeIcon,
        url:"/"    
    },
    {
        name:'Histórico',
        icon: HistoryIcon,
        url:"/history"    
    }
]