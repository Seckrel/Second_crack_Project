import {
  Radio,
  Paper,
  RadioGroup,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  radioGrp: {
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
}));

function PaymentMethod({ paymentMethod, setPaymentMethod }) {
  const classes = useStyles();
  const handleChange = (e) => setPaymentMethod(e.target.value);
  return (
    <Paper>
      <RadioGroup
        aria-label="quiz"
        value={paymentMethod}
        onChange={handleChange}
        className={classes.radioGrp}
      >
        <FormControlLabel value={"0"} control={<Radio />} label="Stripe" />
      </RadioGroup>
    </Paper>
  );
}

export default PaymentMethod;
