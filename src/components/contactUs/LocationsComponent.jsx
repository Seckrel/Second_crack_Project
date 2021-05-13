import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Locations = (props) => {
    return (
        <Container
            disableGutters
        >
            <Paper
                elevation={2}
                square
            >
                <Grid container spacing={4}>
                    {props.locations.map(location => (
                        <Grid item xs={12}>
                            <Box p={2} m={1}>
                                <Typography 
                                    variant={'h5'}
                                    component={'div'}
                                    style={{
                                        fontFamily: "'Old_Growth_Regular',Arial,sans-serif"
                                    }}
                                >
                                    {location.streetName.toLowerCase()}
                                </Typography>
                                <Divider />
                                <Typography 
                                    variant={'h6'}
                                    component={'div'}
                                    style={{
                                        fontFamily: "courier-std,sans-serif"
                                    }}
                                >
                                    {location.placeName}
                                </Typography>
                                
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    )
}

export default Locations;