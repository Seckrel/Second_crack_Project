import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';
import { Fragment } from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';

const useOverlineTypoStyles = makeStyles(theme => ({
    overline: {
        fontSize: "1.12rem",
        fontWeight: 500,
        textTransform: "none"
    }
}));

const useListItemTextStyles = makeStyles(theme => ({
    primary: {
        fontSize: "1.12rem",
        fontWeight: 500,
        textTransform: "none",
        fontFamily: 'courier-std, sans-serif',
        color: "black"
    }
}))

const starGenerator = (stars) => {
    const unfilled = 5 - stars;
    let genStars = [];
    for (let i = 0; i < stars; i++) {
        genStars.push(true);
    }
    for (let i = 0; i < unfilled; i++) {
        genStars.push(false);
    }
    return genStars;
}

const Review = (props) => {
    const reviews = props.reviews;
    const overlineTypoclass = useOverlineTypoStyles();
    const listItemTextClass = useListItemTextStyles();

    return (
        <List>
            {reviews.map(review => (
                <ListItem alignItems="flex-start" key={review.id}>
                    <ListItemText
                        primary={`by: ${review._userId.userName}`}
                        classes={listItemTextClass}
                        secondary={
                            <Fragment>
                                <Typography
                                    component="span"
                                    variant="body1"
                                    color="textPrimary"
                                >
                                    {starGenerator(review.stars)
                                        .map(star => star ? <StarRateIcon /> : <StarOutlineIcon />)
                                    } {moment(parseInt(review.createdAt)).startOf('hour').fromNow()}
                                </Typography>
                                <Typography
                                    component="div"
                                    variant="overline"
                                    classes={overlineTypoclass}
                                >
                                    {review.review}
                                </Typography>
                            </Fragment>
                        }
                    />
                    {props.isAuth?review.editable ? (
                        <ListItemAvatar>
                            <Avatar onClick={() => props.setReviewId(review._id)}>
                                <CreateIcon />
                            </Avatar>
                        </ListItemAvatar>
                    ) : "":""}
                </ListItem>
            ))}
        </List>
    )
}

export default Review;