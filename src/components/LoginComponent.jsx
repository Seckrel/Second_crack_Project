import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import { LOGIN_MUTATION } from '../api/LoginLink';
import { useMutation } from '@apollo/client';
import { useState } from 'react';


const Login = (props) => {
    const { onClose, open } = props;
    const handleClose = () => {
        onClose();
    }
    const [values, setValues] = useState({
        password: '',
        userId: '',
        showPassword: false,
      });
    const [createLink] = useMutation(LOGIN_MUTATION); 
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const submitForm = (event) => {
        createLink({
            variables: {
                userName: values.userId,
                password: values.password
            }
        })
        event.preventDefault();
    }
    return(
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <form onSubmit={submitForm}>
                <DialogContent>
                    <FormControl>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="userId"
                            value={values.userId}
                            label="Email Address"
                            onChange={handleChange('userId')}
                            type="text"
                            fullwidth
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" onClick={handleClose} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </form>
            
            
        </Dialog>

    )
}

export default Login;