import axios from 'axios'
import {GitUser, GitRepo} from '../interfacesNTypes/interfaces'

export const getUser = (name:string) : Promise<{data:GitUser}> =>{
    return axios.get(`https://api.github.com/users/${name}`)
}

export const getRepos = (name:string) : Promise<{data:GitRepo[]}> =>{
    return axios.get(`https://api.github.com/users/${name}/repos`)
}