import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import { useState, useEffect, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER_MUTATION } from '../../api/UpdateUser';
import { GET_USER_DATA_QUERY } from '../../api/UserData';



const UserInfo = (props) => {
    const [values, setValues] = useState({
        showPassword: false,
        userName: "",
        firstName: "",
        lastName: "",
        phnNumber: "",
        currentPassword: "",
        newPassword: ""
    })

    const [updateLink] = useMutation(UPDATE_USER_MUTATION);
    const { _, __, data, refetch } = useQuery(GET_USER_DATA_QUERY);
    const getDataAgain = useMemo(() => refetch(), [data]);
    useEffect(() => {
        if (!data) return null;
        const newData = data.getUsers;
        setValues({
            ...values,
            userName: newData.userName,
            firstName: newData.firstName,
            lastName: newData.lastName,
            phnNumber: newData.phnNumber,
        })
    }, [data])

    const handleClose = () => props.setOpen(false);
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })
    const handleSubmit = () => {
        console.log(values)
        if (!values.firstName) return null;

        try {
            updateLink({
                variables: {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phnNumber: values.phnNumber,
                    currentPassword: values.currentPassword,
                    newPassword: values.newPassword
                },
                refetchQueries: [GET_USER_DATA_QUERY]
            })

        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{values.userName}</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12} sm={3}>
                            <FormControl>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="firstName"
                                    value={values.firstName}
                                    label="First Name"
                                    onChange={handleChange}
                                    name="firstName"
                                    type="text"
                                    fullwidth
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    name="lastName"
                                    id="lastName"
                                    value={values.lastName}
                                    label="Last Name"
                                    onChange={handleChange}
                                    type="text"
                                    fullwidth
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="phnNumber"
                                    name="phnNumber"
                                    value={values.phnNumber}
                                    label="Phn. Number"
                                    onChange={handleChange}
                                    type="number"
                                    fullwidth
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="standard-adornment-password">Current Password</InputLabel>
                                <Input
                                    id="currentPassword"
                                    name="currentPassword"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.currentPassword}
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="standard-adornment-password">New Password</InputLabel>
                                <Input
                                    id="newPassword"
                                    name="newPassword"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.newPassword}
                                    onChange={handleChange}

                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type={"submit"} onClick={handleClose} color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default UserInfo;