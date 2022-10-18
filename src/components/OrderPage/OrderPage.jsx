import { useQuery } from "@apollo/client";
import { GET_USER_DATA_QUERY } from "../../api/UserData";
import { useLocation, Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import AddressInfo from "./AddressInfo";
import PaymentMethod from "./PaymentMethod";
import { updatedCart } from "../../js/AddtoCart";
import StripeCheckout from "react-stripe-checkout";
import {
  CircularProgress,
  Backdrop,
  makeStyles,
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Button,
} from "@material-ui/core";
import OrderDetail from "./OrderDetail";
import { CartList } from "../../js/GetFromCart";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  boxBg: {
    backgroundColor: "#d0cccc",
    height: "calc(100vh - 135px)",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  orderReportBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 200px)",
  },
  orderReportPaper: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "700px",
    height: "300px",
    flexDirection: "column",
  },
  homebtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const getSteps = () => ["Order Details", "Address", "Select Payment"];

function OrderPage() {
  const classes = useStyles();
  const location = useLocation();
  const { cartData } = location.state || CartList();
  const steps = getSteps();
  const [paymentMethod, setPaymentMethod] = useState("0");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phnNumber: "",
    address: "",
    state: "",
    city: "",
  });
  const [activeStep, setActiveStep] = useState(0);
  const [orderCompleted, setOrderComplete] = useState(false);

  const { loading } = useQuery(GET_USER_DATA_QUERY, {
    onCompleted: (data) =>
      setUserData((prev) => ({ ...prev, ...data?.getUsers })),
  });

  const handleAddressOnChange = (e) =>
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <OrderDetail cartData={cartData} />;
      case 1:
        return (
          <AddressInfo
            userData={userData}
            handleAddressOnChange={handleAddressOnChange}
          />
        );
      case 2:
        return (
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        );
      default:
        return <></>;
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleToken = async (token, address) => {
    const product = {
      name: "Sample Book",
      price: cartData.reduce(
        (sum, curr) => sum + curr.pricePerUnit * curr.quantity
      ),
      description: "This is a sample book",
    };
    setPaymentLoading(true);
    axios
      .post("/checkout", { token, product })
      .then((res) => {
        if (res.status === 200) {
          setOrderComplete(true);
          setPaymentLoading(false);
        } else setOrderComplete(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (orderCompleted) updatedCart("");
  }, [orderCompleted]);

  if (loading)
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>;

  if (paymentLoading)
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>;

  if (!orderCompleted)
    return (
      <Box p={10} className={classes.boxBg}>
        <Paper elevation={3}>
          <Stepper activeStep={activeStep} orientation={"vertical"}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent()}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <StripeCheckout
                token={handleToken}
                amount={
                  cartData.reduce(
                    (sum, curr) => sum + curr.pricePerUnit * curr.quantity
                  ) * 100
                }
                name="Product"
                billingAddress
                shippingAddress
                stripeKey="pk_test_51Lu4qoISTY11cqSyOTXWDDNiqTW7QeG6r4MuKz69DhfK0dL3WjDRyLpSvvEFMUTEmjmppllKu8gZ5bx0ZTcjsGSF00p4t9skaw"
              />
              <Button
                onClick={() => setActiveStep(0)}
                className={classes.button}
              >
                Reset
              </Button>
            </Paper>
          )}
        </Paper>
      </Box>
    );

  return (
    <Box className={classes.orderReportBox}>
      <Paper className={classes.orderReportPaper}>
        <Typography variant="h3" component={"div"} align="center">
          Your order has been place.
        </Typography>
        <div className={classes.homebtn}>
          <Button variant="contained" color="primary" to="/" component={Link}>
            Home
          </Button>
        </div>
      </Paper>
    </Box>
  );
}

export default OrderPage;
