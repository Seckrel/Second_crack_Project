import ShowCase from './CarousalComponent'
import MiniAboutUs from './MiniAboutUsComponent'
import MessageBullient from './MessageBullientComponent'
import MenuView from '../recycle/SpecialMenuComponent'
import { specialMenuDetails } from '../../tempJSON/specialMenu'
import React from 'react'


const Home = (props) => {
    const viewType = props.viewType;
    return(
        <React.Fragment>
            <ShowCase />
            <MiniAboutUs />
            <MessageBullient />
            <MenuView 
                menuDetails={specialMenuDetails}
                viewType={viewType}
            />
        </React.Fragment>
    )
}

export default Home;