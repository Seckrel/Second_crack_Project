import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CartList } from '../../js/GetFromCart';
import { updatedCart } from '../../js/AddtoCart';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));



const Cart = (props) => {
    const classes = useStyles();
    const [chipData, setChipData] = useState(CartList());

    const handleDelete = (id) => () => {
        const objIndex = chipData.findIndex(obj => obj.productId === id);
        setChipData(chipData.splice(objIndex, 1));
        updatedCart(JSON.stringify(chipData));
        setChipData(CartList());
    };

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            {console.log(chipData)}
            <DialogTitle id="form-dialog-title">{"Cart"}</DialogTitle>
            <DialogContent>
                <Paper component="ul" className={classes.root}>
                    {!chipData.length ? "Cart Empty" :
                        chipData.map((data) => {
                            return (
                                <li key={data.key}>
                                    <Chip
                                        icon={""}
                                        label={`${data.name} x${data.quantity}`}
                                        onDelete={handleDelete(data.projectId)}
                                        className={classes.chip}
                                    />
                                </li>
                            );
                        })
                    }

                </Paper>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
                    </Button>
                <Button type={"submit"} onClick={props.handleClose} color="primary">
                    Order
                    </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Cart;