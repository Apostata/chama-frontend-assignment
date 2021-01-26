import React, { Suspense, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes  from './routes'
// import { useLogin } from 'Hooks/useLogin'
// import { useHistory } from 'react-router-dom'

const Routes: React.FC = props =>{
    // const { login } = useLogin();
    // const history = useHistory();
    
    const renderRoutes = ()=>{
        let allRoutes;
        allRoutes =  routes ;
        return allRoutes.map((route, idx)=>{
            const {component : Component} = route
            return(
                <Route 
                    key={idx} 
                    exact={route.exact} 
                    path={route.path}  
                    render={()=><Component {...props}/>}
                />
            );
        })
    }

   
    const redirectRoutes = () =>{
        // if(!login){
        //      return <Redirect from="*" to="/login" />
        // } else {
        //     if(history.location.pathname === '/login'){
        //         return <Redirect from="*" to="/" />
        //     } else{
        //         return null
        //     }
        // }
    }

    return(
        <Suspense fallback={<div>...loading</div>}>
            <Switch>
                {renderRoutes()}
            </Switch>
            {redirectRoutes()}
        </Suspense>
    )
}

export default Routes;

