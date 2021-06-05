import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ShopItems from './ShopCardItems';
import { SHOP_ITEM_QUERY } from '../../api/Shop';
import { useQuery } from '@apollo/client';



const Shop = (props) => {
    const { loading, error, data } = useQuery(SHOP_ITEM_QUERY);
    const viewType = props.viewType


    if (loading) return (
        <Backdrop open={loading} >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
    else if(error) return(
        <h2>{error.message}</h2>
    )
    
    return(
        <ShopItems 
            product={data.getShopList}
            viewType={viewType}
        />
    )    
}

export default Shop;