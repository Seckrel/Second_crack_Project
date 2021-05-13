import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CreditImg from './CreditImgComponent';
import { Link, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import { useStylesp20  } from '../../materialUI/Styles'
import { useState, Fragment } from 'react'


const useHeadingStyles = makeStyles((theme) => ({
    root: {
      fontWeight: 400,
      fontFamily: "'Old Growth','Arial','sans-serif'",
      fontSize: 15,
      backgroundColor: theme.palette.background.paper,
      width: "auto",
    },
  }));

const useMenuHeadStyles = makeStyles((theme) => ({
    root: {
      fontWeight: 400,
      fontFamily: "'Brandon Grotesque','Arial','sans-serif'",
      fontSize: 12,
      width: "auto",
    },
  }));


const tileImgData = [
    {
        id: 1,
        backgroundImgSrc: "/assests/tempImgs/pexels-lood-goosen-1235717.jpg",
        altText: "Hot Speical Menu Item",
        active: true,
        credit: "Photo by Lood Goosen from Pexels",
        tileText: "Hot Drinks"
    },
    {
        id: 2,
        backgroundImgSrc: "/assests/tempImgs/pexels-taryn-elliott-4099238.jpg",
        altText: "Breakfast Spical Menu Item",
        active: false,
        credit: "Photo by Taryn Elliott from Pexels",
        tileText: "Breakfast"
    }
]

const menuItem = {
    hotDrinks: [
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
    ],
    breakfast: [
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

const SpecialMenuItems = ({hotDrinkActive}) => {
    const items = hotDrinkActive?menuItem.hotDrinks:menuItem.breakfast;
    return (
        <Grid container spacing={3}>
            {items.map(item => (
                <Fragment>
                    <Grid item xs={12}>
                        <Typography 
                            variant="h6" 
                            component="h3"
                            style={{fontFamily: "'Brandon Grotesque','Arial','sans-serif'"}}
                        >
                            {item.name}
                        </Typography>
                        <Typography 
                            variant="caption" 
                            component="span"
                            style={{fontFamily: "'courier-std', 'sans-serif'"}}
                        >
                            {item.receipe?item.receipe:""}
                        </Typography>
                        <Divider variant={'middle'} />
                    </Grid>
                    
                </Fragment>
            ))}
        </Grid>
    )
}

const FullMenuBtn = ({link}) => {
    if (link !== '/'){
        return (
            <div></div>
        )
    }
    return (
        <Box m={2}>
                    <Grid spacing={3}>
                        <Grid container justify={"center"} item xs={12}>
                        <Button variant="contained" disableElevation>
                            <Link 
                                to={'/menu'}
                                style={{ 
                                    textDecoration: 'none', 
                                    color: 'inherit' 
                                }} 
                            >
                                Show Full Menu
                            </Link>
                        </Button>
                        </Grid>
                    </Grid>
                </Box>
    )
}

const SpecialMenu = (props) => {
    const classes = useStylesp20();
    const menuDetails = props.menuDetails;
    const subTypes = props.menuDetails.subTypes;
    const headTypography = useHeadingStyles();
    const specialMenuHead = useMenuHeadStyles();
    const [hotDrinkActive, setHotDrinkActive] = useState(true);
    const [activeMenuItem, setActiveMenuItem] = useState(subTypes[0].menuItem)
    const match = useRouteMatch();
    const toggleClass = (id) => {
        subTypes.forEach(item => {
            item.active = false;
            if (id === item.id) 
            {   
                item.active = true;
                setHotDrinkActive(!hotDrinkActive);
                setActiveMenuItem(item.menuItem);
            }
        })
    }
    
    return (
        <Container maxWidth="md" disableGutters>
            <Paper
                elevation={3} 
                classes={""} 
                className={classes.padding20}
                square={true}
            >
                
                <Box component="div" m={1}>
                    <GridList spacing={10} cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div">
                                <Typography 
                                    variant="h5" 
                                    classes={headTypography} 
                                    component="h2"
                                >
                                    {menuDetails.menuType.toLowerCase()}
                                </Typography>
                            </ListSubheader>
                        </GridListTile>
                        {subTypes.map((tile) => (
                        <GridListTile 
                            cellHeight={160} 
                            key={tile.id} 
                            cols={2}
                            onClick={!tile.active?() => toggleClass(tile.id):null}
                            className={tile.active?'btn-weather':'btn-faded'}
                            
                        >
                            <CreditImg credit={tile.credit} src={tile.backgroundImgSrc} altText={tile.altText} />
                            <GridListTileBar
                                onClick={!tile.active?() => toggleClass(tile.id):null}
                                title={
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        classes={specialMenuHead}
                                    >
                                        {tile.tileText}
                                    </Typography>
                                }
                            />
                            
                        </GridListTile>                        
                        ))}
                    </GridList>
                </Box>
                <Box component="div" m={2}>
                    <SpecialMenuItems hotDrinkActive={hotDrinkActive}/>
                </Box>
                <FullMenuBtn link={match.url}/>
            </Paper>
        </Container>
    )
}

export default SpecialMenu;