import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

const SignUpForm = () => {
    const [values, setValues] = useState({
        password: '',
        password2: '',
        userId: '',
        firstName: '',
        lastName: '',
        phnNumber: 0,
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
                <FormControl>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstName"
                        value={values.firstName}
                        label="First Name"
                        onChange={handleChange('firstName')}
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
                        id="lastName"
                        value={values.lastName}
                        label="Last Name"
                        onChange={handleChange('lastName')}
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
                        id="userName"
                        value={values.userId}
                        label="User Name"
                        onChange={handleChange('userId')}
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
                        value={values.phnNumber}
                        label="Phn. Number"
                        onChange={handleChange('phnNumber')}
                        type="number"
                        fullwidth
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
                <FormControl>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="password2"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password2}
                        onChange={handleChange('password2')}

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
    )
}

export default SignUpForm;