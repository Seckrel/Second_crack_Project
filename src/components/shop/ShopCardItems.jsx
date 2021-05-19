import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const useShoppingCartStyles = makeStyles(theme => ({
    root: {
        color: "white"
    }
}));


const ShopItems = (props) => {
    const product = props.product;
    const classShoppingCart = useShoppingCartStyles();
    const viewType = props.viewType;
    const colums = {
        mobile: 2,
        tablet: 3,
        laptop: 4,
        pc: 5
    }
    return (
        <GridList cellHeight={180} cols={colums[viewType]}>
            <GridListTile key="Subheader" cols={5} style={{ height: 'auto' }}>
                <ListSubheader component="div">{"Shop"}</ListSubheader>
            </GridListTile>
            {product.map((tile) => (
                <GridListTile key={tile.id} cols={1} onClick={() => props.clkBtn(tile.id)}>
                    <img src={tile.src} alt={tile.title} />
                    <GridListTileBar
                        onClick={() => props.clkBtn()}
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
    )
}

export default ShopItems;