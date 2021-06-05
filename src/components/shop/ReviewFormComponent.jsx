import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { ADD_REVIEW_MUTATION } from '../../api/CommentPost';
import { useMutation } from '@apollo/client';


const useCommentBtnStyles = makeStyles(theme => ({
    root: {
        display: 'block',
        marginLeft: 'auto',
    },
    outlined: {
        borderColor: 'black',
        color: "black",
        '&:hover': {
            borderColor: "black",
            backgroundColor: "rgb(0, 0, 0, 0.04)"
        }
    }
}))

const ReviewForm = (props) => {
    const commentBtnClass = useCommentBtnStyles();
    const [value, setValue] = useState({
        stars: props.review ? props.review.stars : 0,
        review: props.review ? props.review.review : ''
    });
    const [addReviewLink] = useMutation(ADD_REVIEW_MUTATION);
    useEffect(() => {
        setValue({
            ...value,
            stars: props.review ? props.review.stars : 0,
            review: props.review ? props.review.review : ''
        })
    }, [props.review])

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        const dataToSubmit = {
            stars: parseInt(value.stars),
            review: value.review,
            productId: props.productId
        }
        if (props.review) {
            dataToSubmit.reviewId = props.review._id;
        }
        console.log(dataToSubmit)
        await addReviewLink({
            variables: {
                ...dataToSubmit
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    name="stars"
                    value={value.stars}
                    onChange={handleChange}
                    style={{ marginLeft: "auto" }}
                />
            </Box>
            <Box component="div" mb={3} borderColor="transparent">
                <textarea
                    rows="1"
                    aria-label="review textarea"
                    placeholder="Drop a review"
                    class="autocomplete-textarea"
                    name="review"
                    value={value.review}
                    onChange={handleChange}
                ></textarea>
            </Box>
            <Box component="div" mb={3} borderColor="transparent" width={"80%"}>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    classes={commentBtnClass}
                    focusRipple={false}
                >
                    Comment
                </Button>
            </Box>
        </form>
    )
}
//

export default ReviewForm;