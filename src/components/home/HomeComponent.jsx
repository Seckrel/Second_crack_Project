import ShowCase from './CarousalComponent'
import MiniAboutUs from './MiniAboutUsComponent'
import MessageBullient from './MessageBullientComponent'
import React from 'react'


function Home(){
    return(
        <React.Fragment>
            <ShowCase />
            <MiniAboutUs />
            <MessageBullient />
        </React.Fragment>
    )
}

export default Home;