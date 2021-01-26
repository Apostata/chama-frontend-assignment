import React, {useState} from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'

import {StyledLayout} from './main.style'

const MainLayout: React.FC<{}> = ({children}) => {
    const [opened, setOpened] = useState(false)

    return (
        <section className={opened ? 'opened' : ''}>
            <Header setOpen={setOpened} open={opened}/>
            <Sidebar open={opened} setOpen={setOpened} className={'sidebar'}/>
            <StyledLayout className={opened ? 'opened': ''}>
                {children}
                <Footer/>
            </StyledLayout>
            
        </section>
    )
}

export default MainLayout
