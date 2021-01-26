import {lazy} from 'react';

const Home: React.LazyExoticComponent<React.FC> = lazy(()=>import(/* webpackChunkName: "Home" */ '../pages/Home'));
const History: React.LazyExoticComponent<React.FC> = lazy(()=>import(/* webpackChunkName: "Home" */ '../pages/History'));
const NotFound: React.LazyExoticComponent<React.FC> = lazy(()=>import(/* webpackChunkName: "404" */ '../pages/404'));

interface route{
    path?: string,
    exact?: boolean,
    name?: string,
    component: React.LazyExoticComponent<React.FC>
};

const routes: route[]= [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Home
    },
    {
        path: '/search/:term',
        exact: true,
        name: 'Home',
        component: Home
    },
    {
        path: '/history',
        exact: true,
        name: 'Histórico',
        component: History
    },
    {
        component: NotFound
    }
]

export default routes;