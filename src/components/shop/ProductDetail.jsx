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
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Review from './ReviewViewer';
import ReviewForm from './ReviewFormComponent';
import { ISAUTHENTICATED_QUERY } from '../../api/Authorization';
import { useState } from 'react';
import { addToCart } from '../../js/AddtoCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useBoxStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#f5f5f5fc",
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
                        style={{ fontFamily: '"Brandon Grotesque", sans-serif', color: 'rgb(179, 177, 177)' }}
                    >
                        {details.name}
                    </Typography>
                </Grid>
                <Grid container item xs={12} justify={"center"}>
                    <Typography variant={'h6'} component={"div"}
                        style={{
                            fontFamily: 'courier-std, sans-serif',
                            color: 'rgb(121, 118, 118)',
                            fontSize: "2rem"
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
    const [reviewId, setReviewId] = useState("");
    // eslint-disable-next-line
    const { _, __, data: authData, refetch } = useQuery(ISAUTHENTICATED_QUERY);
    const history = useHistory();
    const { loading, error, data } = useQuery(PRODUCT_DETAIL_QUERY, {
        variables: { productId }
    })
    const callbackReviewId = (id) => {
        setReviewId(id);
    }
    if (loading) return (
        <Backdrop open={loading} >
            <CircularProgress color="inherit" />
        </Backdrop>
    );

    if (error) return (
        <div>
            {error.message}
        </div>
    )
    const details = data.getProductDetail;
    const handleClick = () => {
        localStorage.removeItem('productId')
        history.push(`/shop`);
    }

    return (
        <Container disableGutters style={{ height: "100%" }}>
            <Box p={3} classes={classBoxStyle}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="white" href="#" onClick={handleClick}>
                        Shop
                </Link>
                    <Typography>{details.name}</Typography>
                </Breadcrumbs>
                <Divider />
                <Box mt={3}>
                    <DetailView
                        details={details}
                    />
                </Box>
                <Box mt={3} display={"flex"} justifyContent={"center"}>
                    {authData.isAuthenticated ?
                        <Button
                            endIcon={<AddShoppingCartIcon />}
                            onClick={() => addToCart(productId, details.name)}
                        >
                            <Typography variant="h6" component={"span"}>
                                Add to cart
                            </Typography>
                        </Button> : ""
                    }
                </Box>
                <Box mt={3}>
                    {authData.isAuthenticated ?
                        <ReviewForm
                            review={details._reviewId.filter(review => review._id === reviewId)[0]}
                            productId={details._id}
                        /> : ""}
                </Box>
                <Box mt={4}>
                    <Review
                        isAuth={authData.isAuthenticated}
                        reviews={details._reviewId}
                        setReviewId={callbackReviewId}
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default Details;