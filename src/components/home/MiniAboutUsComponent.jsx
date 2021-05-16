import Container from '@material-ui/core/Container'
import { useStylesp20, useStylesPaperGeneral, useStylesBtnColor } from '../../materialUI/Styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'



function MiniAboutUs() {
    const classes = useStylesp20();
    const paperClasses = useStylesPaperGeneral();
    const btnColorStyle = useStylesBtnColor();


    return (
        <Container disableGutters>
            <Paper 
                elevation={2} 
                classes={paperClasses} 
                className={classes.padding20}
                square={true}
            >
                <Box component="div" p={2}>
                    Welcome to 2<sup>nd</sup> Crack.
                </Box>
                <Box component="div">
                    <Typography variant={"h3"}>
                        About Us
                    </Typography>
                </Box>
                <Box component="div">
                    <Typography variant={"body2"}>
                        {/* TODO: Make it dynamic using redux store */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis odio a vehicula dignissim. 
                        Maecenas sit amet velit quis risus condimentum dictum. Nullam ac nisi odio. Curabitur ornare mauris 
                        eget ipsum finibus, ut iaculis risus porttitor. Nulla facilisi. Vestibulum venenatis dui vel enim porta, 
                        non viverra arcu maximus. Nulla ut quam sapien. Nunc accumsan ligula nec ante suscipit tempor. Quisque 
                        laoreet sagittis lobortis. 
                    </Typography>
                </Box>
                <Box 
                    mt={2} 
                    ml={"auto"} 
                    mr={"auto"} 
                    display={"flex"} 
                    justifyContent={"center"}
                >
                <Button classes={btnColorStyle}>
                    <Link 
                        to={'/aboutus'}
                        style={{ 
                            textDecoration: 'none', 
                            color: 'inherit' 
                        }} 
                    >
                        Read About Us
                    </Link>
                </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default MiniAboutUs;