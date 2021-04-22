import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import { ThemeProvider } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Paper from '@material-ui/core/Paper'

import { useStylesHeader, listItemTextHeader } from '../materialUI/Styles'
import { appBarTheme } from '../materialUI/AppBarTheme'
import { useState } from 'react'


function Header(){
    const classes = useStylesHeader()
    const classesItemText = listItemTextHeader()
    const [drawerState, setDrawerState] = useState(false);
    

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawerState(open)
      };

    const navItemList = (items) => {
        return(
            <List>
                {items.map(item => (
                    <ListItem>
                        <ListItemText 
                            primary={item} 
                            classes={{root: classesItemText.root}}
                        />
                    </ListItem>
                ))}
            </List>
        )
    }
    

    return(
        <ThemeProvider theme={appBarTheme}>
            <AppBar position="static" className={classes.toolbar.root}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6">
                        2<sup>nd</sup> Crack
                    </Typography>
                    <Paper className={classes.buttonGap}>
                        <IconButton color="inherit" aria-label="cart">
                            <ShoppingCartIcon />
                        </IconButton>
                    </Paper>
                    <Paper className={classes.buttonGap}>
                        <IconButton className={classes.menu} color="inherit" aria-label="menu" onClick={toggleDrawer("top", true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer 
                            anchor={"top"} 
                            open={drawerState} 
                            onClose={toggleDrawer("top", false)}
                            classes={{ paper: classes.paper }}
                        >
                        {/* TODO: make dynamic */}
                            {navItemList([1,2,3,4])}
                        </Drawer>
                    </Paper>
                </Toolbar>
            </AppBar>
        </ThemeProvider>

    )
}

export default Header