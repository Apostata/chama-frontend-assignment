import React, { useState, useEffect } from 'react'
import {Button, Grid, Input} from '@material-ui/core'
import {useGitApi} from '../hooks/useGitUser'
import {HomeStyled} from '../styles/Home.styled'
import GitUserComponent from '../components/GitUser/GitUser'
import SearchIcon from '@material-ui/icons/Search';
import { RootStateOrAny, useSelector } from "react-redux";

const Home: React.FC = () => {
    const {user, repos, getUser} = useGitApi()
    const [inputValue, setInputValue] = useState<string|null>(user?user.login:null)
    const histories = useSelector((state:RootStateOrAny)=>state.histories) || []
   
    useEffect(() => {
        if(histories.length<1) getUser('apostata')
    }, [])

    return (
        <HomeStyled>
            <Grid container>
                <form onSubmit={(e)=>{e.preventDefault();getUser(inputValue||"")}}>
                    <Grid container className="searchArea">
                        <Grid item xs={12} sm={3} className="paddingRight15 label">
                            <label>Pesquisar usuário no GitHub:</label>
                        </Grid>
                        <Grid item xs={12} sm={5} className="paddingLeft15">
                        
                            <Input 
                                fullWidth
                                value={inputValue||""} 
                                onChange={(e:React.ChangeEvent<HTMLInputElement>):void=>{
                                    const {value} = e.target
                                    setInputValue(value)
                                }}/>                   
                        </Grid>
                                
                        <Grid item xs={12} sm={4} className="paddingRight15">
                            <Button color="primary" variant="contained" type="submit" className="searchButton"><SearchIcon /></Button>
                        </Grid>
                    </Grid>
                </form>
                {user?
                    <GitUserComponent 
                        user={user}
                        repos={repos}
                    />
                :
                    <p className="emptySearch">Digite um usuário do Github para mostrar suas informações.</p>
                }
            </Grid>
        </HomeStyled>
    )
}

export default Home
