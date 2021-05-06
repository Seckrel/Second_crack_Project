import ShowCase from './CarousalComponent'
import MiniAboutUs from './MiniAboutUsComponent'
import MessageBullient from './MessageBullientComponent'
import SpecialMenu from '../recycle/SpecialMenuComponent'
import React from 'react'


function Home(){
    return(
        <React.Fragment>
            <ShowCase />
            <MiniAboutUs />
            <MessageBullient />
            <SpecialMenu />
        </React.Fragment>
    )
}

export default Home;