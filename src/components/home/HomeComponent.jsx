import ShowCase from './CarousalComponent'
import MiniAboutUs from './MiniAboutUsComponent'
import MessageBullient from './MessageBullientComponent'
import MenuView from '../recycle/SpecialMenuComponent'
import { specialMenuDetails } from '../../tempJSON/specialMenu'
import React from 'react'


function Home(){
    return(
        <React.Fragment>
            <ShowCase />
            <MiniAboutUs />
            <MessageBullient />
            <MenuView 
                menuDetails={specialMenuDetails}
            />
        </React.Fragment>
    )
}

export default Home;