import MenuView from '../recycle/SpecialMenuComponent';
import { specialMenuDetails } from '../../tempJSON/specialMenu';
import { drinksMenuDetails } from '../../tempJSON/drinksMenu';
import { classicMenuDetails } from '../../tempJSON/classicMenu';
import { breakfastMenuDetails } from '../../tempJSON/breakfastMenu';
import { Fragment } from 'react';


const Menu = (props) => {
    const viewType = props.viewType;
    return (
        <Fragment>
            <MenuView 
                menuDetails={specialMenuDetails}
                viewType={viewType}
            />
            <MenuView 
                menuDetails={drinksMenuDetails}
                viewType={viewType}
            />
            <MenuView 
                menuDetails={breakfastMenuDetails}
                viewType={viewType}
            />
            <MenuView 
                menuDetails={classicMenuDetails}
                viewType={viewType}
            />
        </Fragment>
    )
}

export default Menu;