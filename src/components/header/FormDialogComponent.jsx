import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import { useState, useEffect } from 'react';
import SignUpForm from './SignUpComponent';
import LoginForm from './LoginComponent';
import { useMutation } from '@apollo/client';
import Box from '@material-ui/core/Box';
import { LOGIN_MUTATION } from '../../api/LoginLink';
import { SIGNUP_MUTATION } from '../../api/SignUpLink';
import { useHistory } from 'react-router-dom';



const FormOrAck = ({
    data, loginForm, submitForm, handleClose, handleLoginOrSignUp
}) => {
    if (data) {
        return (
            <h4>{data.flag ? data.msg : data.error}</h4>
        )
    }
    return (
        <form onSubmit={submitForm}>
            {loginForm ? <LoginForm /> : <SignUpForm />}
            <Box mt={2}>
                <Button onClick={handleLoginOrSignUp}>
                    {loginForm ? "Sign up instead" : "Login Instead"}
                </Button>
            </Box>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                    </Button>
                <Button type="submit" onClick={handleClose} color="primary">
                    {loginForm ? 'Login' : 'Sign Up'}
                </Button>
            </DialogActions>
        </form>
    )
}

const Form = (props) => {
    const { onClose, open } = props;
    const history = useHistory();
    const [loginForm, setLoginForm] = useState(true);
    const [redirect, setRedirect] = useState(false);
    const [LoginLink, { data }] = useMutation(LOGIN_MUTATION);
    const [SignUpLink, { signUpData }] = useMutation(SIGNUP_MUTATION);
    const handleClose = () => {
        onClose();
    }
    useEffect(() => {
        history.push(history.location.pathname);
    }, [redirect, history])
    const submitForm = async (e) => {
        if (loginForm) {
            try {
                await LoginLink({
                    variables: {
                        userName: e.target.userName.value,
                        password: e.target.password.value,
                    }
                })
            } catch (e) { console.log(e.message) }
        } else {
            if (e.target.password.value !== e.target.password2.value) return null;
            await SignUpLink({
                variables: {
                    userName: e.target.userName.value,
                    password: e.target.password.value,
                    firstName: e.target.firstName.value,
                    lastName: e.target.lastName.value,
                    phnNumber: parseInt(e.target.phnNumber.value),
                }
            })
                .then(res => { setRedirect(true) })
                .catch(e => console.log(e.message))
        }
    }
    const handleLoginOrSignUp = () => {
        setLoginForm(!loginForm);
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id={
                `form-${loginForm ? 'Login' : 'Sign up'}`
            }>
                {loginForm ? 'Login' : 'Sign Up'}
            </DialogTitle>
            <DialogContent>
                <FormOrAck
                    data={loginForm ? data : signUpData}
                    loginForm={loginForm}
                    submitForm={submitForm}
                    handleClose={handleClose}
                    handleLoginOrSignUp={handleLoginOrSignUp}
                />
            </DialogContent>
        </Dialog>
    )
}

export default Form;