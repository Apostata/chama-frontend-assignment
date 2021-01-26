import React, { useState, useEffect } from 'react'
import {Button, Grid, Input} from '@material-ui/core'
import {useGitApi} from '../hooks/useGitUser'
import {HomeStyled} from '../styles/Home.styled'
import { RootStateOrAny, useSelector } from "react-redux";
import {History} from '../interfacesNTypes/interfaces'
import {sortByTimeStamp} from '../helpers/sortByTimeStamp'
import SerachItem from '../components/SearchItem/SerachItem'
import GitUserComponent from '../components/GitUser/GitUser'

const Home: React.FC = () => {
    const {user, repos, getStoreHistories, getUser} = useGitApi()
    const histories = useSelector((state:RootStateOrAny)=>state.histories) || []

    useEffect(() => {
        getStoreHistories()
    }, [])

    const renderHistories = () =>{
        const sortedHistories = sortByTimeStamp(histories)
        return sortedHistories.map((history:History)=>{
            return <SerachItem key={`history-item-${history.timestamp}`} item={history} getUser={getUser}/>
        })
    }

    return (
        <HomeStyled>
            <h1 className="titles">Histórico de pesquisa</h1>
           
            <div className="histories">
               
                {renderHistories()}
            </div>
            {user?
                <GitUserComponent 
                    user={user}
                    repos={repos}
                />
            :
                <p className="emptySearch">clique em um dos items do histórico para mostrar o usuário</p>
            }
        </HomeStyled>
    )
}

export default Home
