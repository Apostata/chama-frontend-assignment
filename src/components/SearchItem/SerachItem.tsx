import React from 'react'
import {History} from '../../interfacesNTypes/interfaces'
import Card from '@material-ui/core/Card';
interface componentProps{
    item: History,
    getUser: Function
}

const SearchItem: React.FC<componentProps> = ({item, getUser})=>{
    
    return(
        <Card className="customCard" onClick={()=>getUser(item.term, false)}>
            {item.term}
        </Card>
    )
}

export default SearchItem