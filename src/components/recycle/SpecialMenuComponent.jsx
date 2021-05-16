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


const MenuItemsView = ({menuItem}) => {
    // const items = hotDrinkActive?menuItem.hotDrinks:menuItem.breakfast;
    return (
        <Grid container spacing={3}>
            {menuItem.map(item => (
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

const MenuView = (props) => {
    const classes = useStylesp20();
    const menuDetails = props.menuDetails;
    const subTypes = props.menuDetails.subTypes;
    const headTypography = useHeadingStyles();
    const specialMenuHead = useMenuHeadStyles();
    const [hotDrinkActive, setHotDrinkActive] = useState(true);
    const [activeMenuItem, setActiveMenuItem] = useState(subTypes[0].menuItem)
    const match = useRouteMatch();
    const viewType = props.viewType;
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

    const headCols = () => {
        console.log(viewType);
        if (viewType === 'mobile' || viewType === 'tablet'){
            return 2
        }
        return 3
    }

    const itemCols = () => {
        if (headCols() === 2){
            return viewType === 'mobile'?2:1
        }
        return 1
        // cols={viewType === 'mobile'?2:1}
    }
    
    return (
        <Container disableGutters>
            <Paper
                elevation={3} 
                classes={""} 
                className={classes.padding20}
                square={true}
            >
                
                <Box component="div" m={1}>
                    <GridList spacing={10} cellHeight={180} cols={headCols()} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={headCols()}style={{ height: 'auto' }}>
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
                            cols={itemCols()}
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
                    <MenuItemsView menuItem={activeMenuItem}/>
                </Box>
                <FullMenuBtn link={match.url}/>
            </Paper>
        </Container>
    )
}

export default MenuView;