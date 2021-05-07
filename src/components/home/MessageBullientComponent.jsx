import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStylesPaper = makeStyles(theme => ({
    root: {
        backgroundImage: 'url("/assests/tempImgs/pexels-kaboompics-com-6067.jpg")',
        backgroundPosition: "0 0",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}))

const useStyles = makeStyles(theme => ({
    h4Section : {
        color: "#c7b9a9",
        fontWeight: 400,
        fontFamily: "'Old Growth','Arial','sans-serif'",
        fontSize: 15,
        lineHeight: "100px",
        textAlign: "center"
    }
}))

const useMessageBoxStyles = makeStyles(theme => ({
    root: {
        width: "200px",
        height: "100px",
        marginBottom: "15%"
    }
}))



const MessageBullient = () => {
    const classesPaper = useStylesPaper();
    const classesMessageBox = useMessageBoxStyles();
    const classes = useStyles();
    
    return (
        <Container disableGutters>
            <Paper 
                elevation={3}
                classes={classesPaper}
                square={true}
            >
                <Box component={"div"} p={2} classes={classesMessageBox}>
                    <Paper 
                        elevation={5}
                        style={{height: "inherit"}}
                    >
                        <Typography variant={"h4"} className={classes.h4Section}>
                            we are open
                        </Typography>
                    </Paper>
                </Box>
            </Paper>
        </Container>
    )
}

export default MessageBullient;