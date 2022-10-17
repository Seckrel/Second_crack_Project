import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ccyFormat = (num) => {
  return `${num.toFixed(2)}`;
};

const priceRow = (qty, unit) => {
  return qty * unit;
};

const total = (cartData) =>
  cartData.reduce((sum, curr) => sum + curr.quantity * curr.pricePerUnit, 0);

function OrderDetail({ cartData }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="order detail table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Order Details
            </TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Price/Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartData.map((row) => (
            <TableRow key={row.productId}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.pricePerUnit}</TableCell>
              <TableCell align="right">
                {ccyFormat(priceRow(row.quantity, row.pricePerUnit))}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(total(cartData))}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderDetail;
