import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { useStylesp20  } from '../../materialUI/Styles'

function SpecialMenu() {
    const classes = useStylesp20();
    return (
        <Container maxWidth="md" disableGutters>
            <Paper
                elevation={3} 
                classes={""} 
                className={classes.padding20}
                square={true}
            >
                <strong>{"Hello"}</strong>
            </Paper>
        </Container>
    )
}

export default SpecialMenu