import React from 'react'
import {Grid} from '@material-ui/core'
import{GitUser, GitRepo} from '../../interfacesNTypes/interfaces'

interface componentProps{
    user: GitUser,
    repos:GitRepo[] | null
}

const GitUserComponent :React.FC<componentProps> = ({user, repos}) =>{
    return(
        <Grid container className="content">
            <Grid item xs={12} sm={4} className="leftContent">
                <h1 className="name">{user.login}{user.name?`(${user.name})`:null}</h1>
                <img className="image" src={user.avatar_url} />
                <Grid item xs={12} className="about">
                    {user.name?<p><span>Nome:</span>{user.name}</p>:null}
                    {user.bio?<p><span>Citação:</span>"{user.bio}"</p>:null}
                    {user.company?<p><span>Compania(s):</span>{user.company}</p>:null}
                    {user.location?<p><span>Localização:</span>{user.location}</p>:null}
                    {user.email?<p><span>Email:</span>{user.email}</p>:null}
                </Grid>
            </Grid>
            <Grid item xs={12} sm={8} className="">
                
                <Grid item xs={12}>
                    <h2 className="titles">Repos</h2>
                    <Grid container>
                        {repos?
                            repos.map(repo=>(
                                <Grid key={repo.id} item xs={12}>
                                    <a href={repo.html_url}>{repo.full_name}</a>
                                    <span>{repo.description?` - ${repo.description}`:""}</span>
                                </Grid>
                            ))
                        :null}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default GitUserComponent