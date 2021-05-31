import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useRouteMatch } from 'react-router-dom';


const useShoppingCartStyles = makeStyles(theme => ({
    root: {
        color: "white",
    }
}));

const useBodyBoxStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#fff",
        height: "100%",
    }
}))


const ShopItems = (props) => {
    const product = props.product;
    const history = useHistory();
    
    const classShoppingCart = useShoppingCartStyles();
    const classBodyBox = useBodyBoxStyles();
    let { path, url } = useRouteMatch();
    const viewType = props.viewType;
    const colums = {
        mobile: 2,
        tablet: 3,
        laptop: 4,
        pc: 5
    }
    const handleClick = (productId) => {
        history.push(`/${productId}`);
      }
    return (
        <Box classes={classBodyBox} pt={3}>
        <GridList cellHeight={180} cols={colums[viewType]} spacing={0}>
            <GridListTile key="Subheader" cols={colums[viewType]} style={{ height: 'auto', marginBottom: "24px" }}>
                <ListSubheader component="div">
                    <Box display="flex" justifyContent={"center"}>
                    <Typography 
                        variant={'h4'}
                        component={"div"}
                        style={{
                            fontFamily: "'Old Growth',Arial,sans-serif"
                        }}
                    >
                        {"Shop".toLowerCase()}
                    </Typography>
                    </Box>
                </ListSubheader>
            </GridListTile>
            {product.map((tile) => (
                <GridListTile key={tile.id} cols={1} onClick={() => handleClick(tile.id)}>
                    <img src={tile.src} alt={tile.title} />
                    <GridListTileBar
                        title={tile.name}
                        subtitle={<span>${tile.price}</span>}
                    />
                    <GridListTileBar
                        actionIcon={
                            <IconButton aria-label={`info about ${tile.title}`}>
                                <ShoppingCartIcon classes={classShoppingCart} />
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
      </GridList>
      </Box>
    )
}

export default ShopItems;