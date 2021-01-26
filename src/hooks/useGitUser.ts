import axios from 'axios'
import {useState} from 'react'
import {GitUser, GitRepo, History} from '../interfacesNTypes/interfaces'
import {getUser as getUserService, getRepos as getReposService} from '../services/github.service'
import { useDispatch } from "react-redux";
import {setHistory, getHistories} from '../store/actions/histories.actions'


export const useGitApi = () =>{
    const dispatch = useDispatch()
    
    const [user, setUser] = useState<GitUser | null>(null)
    const [repos, setRepos] = useState<GitRepo[] | null>(null)

    const getUser = async (name:string, storeUser:boolean=true, getUseRepos:boolean=true) : Promise<void>=>{
        const {data} = await getUserService(name)
        setUser(data)
        if(getUseRepos) getRepos(name)
        if(storeUser)dispatch(setHistory({term:name, timestamp:new Date().getTime()}))
    }

    const getRepos = async (name:string) : Promise<void>=>{
        const {data} = await getReposService(name)
        setRepos(data)
    }

    const getStoreHistories = (): void =>{
        dispatch(getHistories())
    }

    return{
        user,
        repos,
        getStoreHistories,
        setUser,
        getUser,
        getRepos
    }
}
