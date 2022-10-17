import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Box, makeStyles } from "@material-ui/core";
import ShopItems from "./ShopCardItems";
import { SHOP_ITEM_QUERY } from "../../api/Shop";
import { useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  widthFix: {
    width: "500px",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
  }
}));

const Shop = (props) => {
  const { loading, error, data } = useQuery(SHOP_ITEM_QUERY);
  const classes = useStyles();
  const viewType = props.viewType;

  if (loading)
    return (
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  else if (error)
    return (
      <Box className={classes.flexCenter} pt={10}>
        <Alert severity="error" px={2} className={classes.widthFix}>
          <AlertTitle>Error</AlertTitle>
          Fecthing Error — <strong>Server unresponsive</strong>
        </Alert>
      </Box>
    );

  return <ShopItems product={data.getShopList} viewType={viewType} />;
};

export default Shop;
