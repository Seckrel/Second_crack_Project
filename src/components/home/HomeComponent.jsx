import ShowCase from './CarousalComponent'
import MiniAboutUs from './MiniAboutUsComponent'
import MessageBullient from './MessageBullientComponent'
import SpecialMenu from '../recycle/SpecialMenuComponent'
import React from 'react'

const specialMenuDetails = {
    menuType: "special menu",
    subTypes: [
        {
            id: 1,
            backgroundImgSrc: "/assests/tempImgs/pexels-lood-goosen-1235717.jpg",
            altText: "Hot Speical Menu Item",
            active: true,
            credit: "Photo by Lood Goosen from Pexels",
            tileText: "Hot Drinks",
            menuItem: [
                {
                    name: "Cappacino",
                },
                {
                    name: "Latte",
                },
                {
                    name: "Espresso",
                },
                {
                    name: "Pumkin Latte",
                },
                {
                    name: "Turkish Style",
                },
            ]
        },
        {
            id: 2,
            backgroundImgSrc: "/assests/tempImgs/pexels-taryn-elliott-4099238.jpg",
            altText: "Breakfast Spical Menu Item",
            active: false,
            credit: "Photo by Taryn Elliott from Pexels",
            tileText: "Breakfast",
            menuItem: [
                {
                    name: "Toast",
                    receipe: "w/ Butter, honey, or jam"
                },
                {
                    name: "Egg on Toast",
                    receipe: "Two eggs cook your way"
                },
                {
                    name: "Eggs Benedict",
                    receipe: "Two Poached Eggs, Hollandaise, served with a Bagel and Bacon or Ham"
                }
            ]
        }
    ],
}


function Home(){
    return(
        <React.Fragment>
            <ShowCase />
            <MiniAboutUs />
            <MessageBullient />
            <SpecialMenu 
                menuDetails={specialMenuDetails}
            />
        </React.Fragment>
    )
}

export default Home;