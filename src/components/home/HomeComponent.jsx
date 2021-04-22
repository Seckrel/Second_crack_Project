import ShowCase from './CarousalComponent'
import MiniAboutUs from './MiniAboutUsComponent'
import React from 'react'



function Home(){
    return(
        <React.Fragment>
            <ShowCase />
            <MiniAboutUs />
        </React.Fragment>
    )
}

export default Home;