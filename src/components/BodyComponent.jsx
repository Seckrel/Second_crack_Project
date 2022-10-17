import Home from "./home/HomeComponent";
import AboutUs from "./aboutUs/AboutUsComponent";
import ContactUs from "./contactUs/ContactUsComponent";
import Menu from "./menu/MenuComponent";
import Box from "@material-ui/core/Box";
import Shop from "./shop/ShopComponent";
import ProductDetail from "./shop/ProductDetail";
import OrderPage from "./OrderPage/OrderPage";
import { Switch, Route } from "react-router-dom";

const Body = (props) => {
  const viewType = props.viewType;
  return (
    <Box className={"mainBody"}>
      <Switch>
        <Route path="/" exact>
          <Home viewType={viewType} />
        </Route>
        <Route path="/aboutus">
          <AboutUs viewType={viewType} />
        </Route>
        <Route path="/contact">
          <ContactUs viewType={viewType} />
        </Route>
        <Route path="/menu">
          <Menu viewType={viewType} />
        </Route>
        <Route path={"/order"}>
          <OrderPage />
        </Route>
        <Route path="/shop">
          <Shop viewType={viewType} />
        </Route>
        <Route path={`/:productId`}>
          <ProductDetail />
        </Route>
      </Switch>
    </Box>
  );
};

export default Body;
