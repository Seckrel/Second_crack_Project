import MenuView from '../recycle/SpecialMenuComponent';
import { specialMenuDetails } from '../../tempJSON/specialMenu';
import { drinksMenuDetails } from '../../tempJSON/drinksMenu';
import { classicMenuDetails } from '../../tempJSON/classicMenu';
import { breakfastMenuDetails } from '../../tempJSON/breakfastMenu';
import { Fragment } from 'react';


function Menu() {
    return (
        <Fragment>
            <MenuView 
                menuDetails={specialMenuDetails}
            />
            <MenuView 
                menuDetails={drinksMenuDetails}
            />
            <MenuView 
                menuDetails={breakfastMenuDetails}
            />
            <MenuView 
                menuDetails={classicMenuDetails}
            />
        </Fragment>
    )
}

export default Menu;