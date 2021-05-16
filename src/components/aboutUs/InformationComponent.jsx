import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';

const usePaperStyles = makeStyles(theme => ({
    root: {
        backgroundImage: "#fff",
    }
}))

const useButtonStyles = makeStyles(theme => ({
    root: {
        color: '#797676',
        "&:hover": {
            backgroundColor: "#797676",
            color: "#fff"
        }
    }
}))

function Info() {
    const paperClass = usePaperStyles();
    const buttonClass = useButtonStyles();
    return (
        <Container 
            disableGutters
            style={{overflow: "hidden"}}
        >
            <Paper
                elevation={2}
                square
                classes={paperClass}
            >
                <Grid container spacing={1}>
                    <Grid item>
                        <Box mt={2} p={2}>
                            <Typography
                                variant={"h4"}
                                style={{
                                        fontFamily: "'Brandon Grotesque',sans-serif", 
                                        color: "#b3b1b1"
                                    }}
                            >
                                About Us - 2nd Crack
                            </Typography>
                        </Box>
                        <Divider variant={"middle"}/>
                    </Grid>
                    
                    <Grid item>
                        <Box p={2}>
                            <Typography 
                                variant={"subtitle1"}
                                component={"div"}
                                style={{
                                    fontFamily: "courier-std,sans-serif",
                                    color: "#797676"
                                }}
                            >
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                                obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
                                the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                                by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 
                                "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 
                                translation by H. Rackham.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item container justify={"center"}>
                        <Box ml={"auto"} mr={"auto"} mb={4}>
                            <Link 
                                to={'/contact'}
                                style={{ 
                                    textDecoration: 'none', 
                                    color: 'inherit' 
                                }} 
                            >
                                <Button  classes={buttonClass}>
                                    <Typography 
                                        varianet={"h4"}
                                        component={"span"}
                                    >
                                        Contact Us   
                                    </Typography>
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Info;