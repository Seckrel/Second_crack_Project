import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ShopItems from './ShopCardItems';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { SHOP_ITEM_QUERY } from '../../api/Shop';
import { useQuery } from '@apollo/client';
import { useState } from 'react';


const Shop = (props) => {
    const { loading, error, data } = useQuery(SHOP_ITEM_QUERY);
    const viewType = props.viewType;
    const [itemList, setItemList] = useState(true);
    const [singleItem, setSingleItem] = useState({});
    
    const handleItem = (id) => {
        const temp = data.getShopList.filter(item => item.id === id)[0]
        console.log(temp)
        setSingleItem({
            ...singleItem,
            ...temp
        })
        setItemList(!itemList);
    }

    if (itemList){
        if (loading) return (
            <Backdrop open={loading} >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
        
        return(
            <ShopItems 
                product={data.getShopList}
                viewType={viewType}
                clkBtn={handleItem}
            />
        )
    }

    return (
        <Box m={2} mb={8}>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"center"}> 
                <img src={singleItem.src} height={300} alt={singleItem.name} />
            </Grid>
            <Grid item xs={12} justify={"center"}>
                <Grid container spacing={2}>
                    <Grid container item xs={12} justify={"center"}>
                        <Typography 
                            variant={'h4'}
                            component={"div"}
                            style={{
                                fontFamily: "'Old Growth',Arial,sans-serif"
                            }}
                        >
                            {singleItem.name.toLowerCase()}
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} justify={"center"}>
                        <Typography variant={'h6'} component={"div"}>
                            ${singleItem.price}
                        </Typography>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    )

    
}

export default Shop;