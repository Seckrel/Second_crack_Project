import TextField from '@material-ui/core/TextField';
import { FormControl, ListItem } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { ERROR } from '../../constData/constData';
import List from '@material-ui/core/List';
import FormHelperText from '@material-ui/core/FormHelperText'



const HelpText = ({ error, field=null }) => {
    if (!error.isError) return ("")
    console.log("error")
    return (
            <List>
                <ListItem>{error.required}</ListItem>
                {field === 'userId' ? <ListItem>{error.nameStart}</ListItem> : ""}
            </List>
        )
}


const LoginForm = () => {
    const INIT_ERROR = {
        userId: { required: "", nameStart: "", isError: false },
        password: { required: "", isError: false },

    }
    const [values, setValues] = useState({
        password: '',
        userId: '',
        showPassword: false,
    });

    const [error, setError] = useState(INIT_ERROR);

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateForm = (event, prop) => {
        setError(INIT_ERROR);
        const temp = {
            userId: { required: "", nameStart: "", isError: false },
            password: { required: "", isError: false },
        }
        if (!event.target.value) {
            temp[prop].required = ERROR.requiredField
            temp[prop].isError = true
        }
        if (prop === 'userId' && !event.target.value.match(/^[A-Za-z].*/)) {
            temp.userId.nameStart = ERROR.nameStart
            temp.userId.isError = true;
        }
        setError(temp)
    }

    const handleChange = (prop) => async (event) => {
        setValues({ ...values, [prop]: event.target.value });
        validateForm(event, prop);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                {console.log(error)}
                <FormControl>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="userName"
                        value={values.userId}
                        label="User Name"
                        onChange={handleChange('userId')}
                        type="text"
                        error={error.userId.isError ? true : false}
                        helperText={<HelpText error={error.userId} field={"userId"} />}
                        fullwidth
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl error={error.password.isError ? true : false}>
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
                    <FormHelperText id="component-error-text"><HelpText error={error.password} /></FormHelperText>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default LoginForm;