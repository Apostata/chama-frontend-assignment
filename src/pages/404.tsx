import React, { useEffect } from 'react'

import { useHistory } from "react-router-dom"

const NotFound: React.FC = () =>{
    const  history  = useHistory()
    useEffect(()=>{
        history.replace('/404')
    },[history.location.pathname])
    return(
        <div>Not Found</div>
        
    )
}

export default NotFound;