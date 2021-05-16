import Home from './home/HomeComponent';
import AboutUs from './aboutUs/AboutUsComponent';
import ContactUs from './contactUs/ContactUsComponent';
import Menu from './menu/MenuComponent';
import Box from '@material-ui/core/Box'
import { Switch, Route } from 'react-router-dom';


const Body = (props) => {
    const viewType = props.viewType;
    return(
        <Box className={"mainBody"}>
            <Switch>
                <Route path="/" exact>
                    <Home viewType={viewType}/>
                </Route>
                <Route path='/aboutus'>
                    <AboutUs viewType={viewType}/>
                </Route>
                <Route path='/contact'>
                    <ContactUs viewType={viewType}/>
                </Route>
                <Route path='/menu'>
                    <Menu viewType={viewType}/>
                </Route>
            </Switch>
        </Box>
    )
}

export default Body;