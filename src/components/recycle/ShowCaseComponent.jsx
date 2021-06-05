import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CreditImg from './CreditImgComponent'


const ShowCase = (props) => {
    const showCaseImg = props.showCaseImg;
    const color = props.color;
    const fontFamily = props.fontFamily;
    const overlayText = props.overlayText;
    const variant = props.variant?props.variant:'h6'
    return (
        <Container 
            disableGutters
            className={"container-flex-fixed"}
        >
            <Paper 
                elevation={3}
                square  
                className={'overlay-container'}
            >
                <CreditImg src={showCaseImg.src}
                    credit={showCaseImg.credit}
                    altText={showCaseImg.altText}
                    imgClassName={"main-show-case"}
                />
                <Box className={"overlay-centered"}>
                    <Typography 
                        variant={variant} 
                        component="div"
                        style={{
                                color: color,
                                textShadow: "rgb(0, 0, 0) -3px 3px 5px",
                                fontFamily: fontFamily
                                }}
                    >
                        {overlayText}
                    </Typography>
                </Box>
            </Paper>
        </Container>
    )
}

export default ShowCase;