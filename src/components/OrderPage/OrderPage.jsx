import { useQuery, useMutation, gql } from "@apollo/client";
import { GET_USER_DATA_QUERY } from "../../api/UserData";
import { UPDATE_USER_MUTATION } from "../../api/UpdateUser";
import { PRODUCT_DETAIL_QUERY } from "../../api/Order";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import AddressInfo from "./AddressInfo";
import PaymentMethod from "./PaymentMethod";
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
}));

const getSteps = () => ["Order Details", "Address", "Select Payment"];

function OrderPage() {
  const classes = useStyles();
  const location = useLocation();
  const { cartData } = location.state || CartList();
  const steps = getSteps();
  const [paymentMethod, setPaymentMethod] = useState("0");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phnNumber: "",
    address: "",
    state: "",
    city: "",
  });
  const [activeStep, setActiveStep] = useState(0);

  const [
    updateUserData,
    {
      data: updatedUserData,
      loading: userUpdateLoading,
      error: updateUserError,
    },
  ] = useMutation(UPDATE_USER_MUTATION);

  const [
    payForOrder,
    { data: payedData, loading: payOrderLoading, error: payOrderError },
  ] = useMutation(PRODUCT_DETAIL_QUERY);

  const { loading } = useQuery(GET_USER_DATA_QUERY, {
    onCompleted: (data) =>
      setUserData((prev) => ({ ...prev, ...data?.getUsers })),
  });

  const handleAddressOnChange = (e) =>
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const PayOrder = async () => {
    try {
      // await updateUserData({
      //   variables: {
      //     firstName: userData.firstName,
      //     lastName: userData.lastName,
      //     phnNumber: userData.phnNumber,
      //     address: userData.address,
      //     city: userData.city,
      //     state: userData.state,
      //   },
      // });
      payForOrder({
        variables: {
          orderList: [{ productId: "1", quantity: 3 }],
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

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

  if (loading)
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>;

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
            <Button
              onClick={PayOrder}
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Pay
            </Button>
            <Button onClick={() => setActiveStep(0)} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </Paper>
    </Box>
  );
}

export default OrderPage;
