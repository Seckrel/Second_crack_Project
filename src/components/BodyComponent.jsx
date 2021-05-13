import Home from './home/HomeComponent';
import AboutUs from './aboutUs/AboutUsComponent';
import ContactUs from './contactUs/ContactUsComponent';
import Menu from './menu/MenuComponent';
import Box from '@material-ui/core/Box'
import { Switch, Route } from 'react-router-dom';


function Body() {
    return(
        <Box className={"mainBody"}>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path='/aboutus'>
                    <AboutUs />
                </Route>
                <Route path='/contact'>
                    <ContactUs />
                </Route>
                <Route path='/menu'>
                    <Menu />    
                </Route>
            </Switch>
        </Box>
    )
}

export default Body;