import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import { PRODUCT_DETAIL_QUERY } from '../../api/ProductDetail';
import { useQuery } from '@apollo/client';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Review from './ReviewViewer';

const useBoxStyles = makeStyles(theme =>({ 
    root: {
        backgroundColor: "#fff",
        height: "100%",
        overflowX: "hidden"
    }
}))

const DetailView = ({ details }) => (
    <Grid container spacing={2}>
    <Grid container item xs={12} justify={"center"}> 
        <img src={details.src} height={300} alt={details.name} />
    </Grid>
    <Grid item xs={12} justify={"center"}>
        <Grid container spacing={2}>
            <Grid container item xs={12} justify={"center"}>
                <Typography 
                    variant={'h3'}
                    component={"div"}
                    style={{fontFamily: '"Brandon Grotesque", sans-serif', color: 'rgb(179, 177, 177)'}}
                >
                    {details.name}
                </Typography>
            </Grid>
            <Grid container item xs={12} justify={"center"}>
                <Typography variant={'h6'} component={"div"}
                    style={{
                        fontFamily: 'courier-std, sans-serif',
                        color: 'rgb(121, 118, 118)'
                    }}
                >
                    ${details.price}
                </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)

const Details = () => {
    const { productId } = useParams();
    const classBoxStyle = useBoxStyles();
    const history = useHistory();
    const { loading, error, data } = useQuery(PRODUCT_DETAIL_QUERY, {
        variables: { productId }
    })

    if (loading) return (
        <Backdrop open={loading} >
            <CircularProgress color="inherit" />
        </Backdrop>
    );

    if (error) return (
        <div>
            {error}
        </div>    
    )

    const details = data.getProductDetail;
    const handleClick = () => {
        history.push(`/shop`);
      }

    return (
        <Box p={3} classes={classBoxStyle}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="white"  href="#" onClick={handleClick}>
                    Shop
                </Link>
                <Typography>{details.name}</Typography>
            </Breadcrumbs>
            <Divider />
            <Box mt={3}>
                <DetailView details={details} />
            </Box>
            <Box mt={4}>
                <Review reviews={details._reviewId} />
            </Box>
        </Box>
    )
}

export default Details;