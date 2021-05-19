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
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStylesHeader, listItemTextHeader } from '../materialUI/Styles'
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { appBarTheme } from '../materialUI/AppBarTheme'
import { useState } from 'react'
import { FormControl } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

const useDesktopListStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    }
}))

const useToolbarStyles = makeStyles(theme => ({
    gutters: {
        padding: "0 calc(100% * 0.1) 0 calc(100% * 0.11)"
    }
}))


const LoginDialog = (props) => {
    const { onClose, open } = props;
    const handleClose = () => {
        onClose();
    }
    const [values, setValues] = useState({
        password: '',
        userId: '',
        showPassword: false,
      });
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const submitForm = (event) => {
        console.log(values)
        event.preventDefault();
    }
    return(
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <form onSubmit={submitForm}>
                <DialogContent>
                    <FormControl>
                        <TextField
                            autoFocus
                            margin="dense"
                            value={values.userId}
                            label="Email Address"
                            onChange={handleChange('userId')}
                            type="text"
                            fullwidth
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                    }
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" onClick={handleClose} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </form>
            
            
        </Dialog>

    )
}

const Header = (props) => {
    const classes = useStylesHeader()
    const classesItemText = listItemTextHeader()
    const [drawerState, setDrawerState] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const navItems =["Home", "About Us", "Menu", "Contact"];
    const viewType = props.viewType;
    const desktopListStyle = useDesktopListStyles();
    const toolbarStyles = useToolbarStyles();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawerState(open)
      };

    const linkMaker = (item) => {
        return item.toLowerCase() === 'home'?'':item.toLowerCase().replaceAll(/\s/g,'');
    }

    const navItemList = (items) => {
        return(
            <List>
                {items.map(item => (
                    <ListItem>
                        <ListItemText     
                            classes={{root: classesItemText.root}}
                        >
                            <Link to={`/${linkMaker(item)}`} 
                                style={{ 
                                        textDecoration: 'none', 
                                        color: 'inherit' 
                                    }} 
                                onClick={toggleDrawer("top", false)}
                            >
                                {item}
                            </Link>
                        </ListItemText>
                        
                    </ListItem>
                ))}
            </List>
        )
    }

    const mobileNav = () => (
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
                {navItemList(navItems)}
            </Drawer>
        </Paper>
    )

    const desktopNav = () => (
        <List classes={desktopListStyle}>
            {navItems.map(item => (
                <ListItem>
                    <Typography  variant="h6" noWrap>
                        <Link 
                            to={`/${linkMaker(item)}`} 
                            style={{ 
                                textDecoration: 'none', 
                                color: 'inherit' 
                                }} 
                            onClick={toggleDrawer("top", false)}
                        >
                            {item}
                        </Link>
                    </Typography>
                </ListItem>
            ))}
        </List>
    )

    const handleClickOpen = () => {
        console.log(loginOpen)
        setLoginOpen(true);
    }

    const handleClose = () => {
        setLoginOpen(false);
    }
    

    return(
        <ThemeProvider theme={appBarTheme}>
            <AppBar position="static" className={classes.toolbar.root}>
                <Toolbar classes={toolbarStyles}>
                    <Typography className={classes.title} variant="h6">
                        2<sup>nd</sup> Crack
                    </Typography>
                    {viewType === "laptop" || viewType === "pc"?desktopNav():mobileNav()}
                    <Paper className={classes.buttonGap}>
                        <IconButton color="inherit" aria-label="cart">
                            <ShoppingCartIcon />
                        </IconButton>
                    </Paper>
                    <Paper className={classes.buttonGap}>
                        <IconButton 
                            color="inherit" 
                            aria-label="account" 
                            onClick={handleClickOpen}
                        >
                            <AccountCircleIcon />
                        </IconButton>
                    </Paper>
                    <LoginDialog 
                        open={loginOpen} 
                        onClose={handleClose} 
                    />
                </Toolbar>
            </AppBar>
        </ThemeProvider>

    )
}

export default Header