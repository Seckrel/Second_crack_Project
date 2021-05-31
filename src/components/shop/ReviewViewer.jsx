import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';
import { Fragment } from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const starGenerator = (stars) => {
    const unfilled = 5 - stars;
    let genStars = [];
    for (let i = 0; i < stars; i++){
        genStars.push(true);
    }
    for(let i = 0; i < unfilled; i++){
        genStars.push(false);
    }
    return genStars;
}

const Review = (props) => {
    const reviews = props.reviews;

    return (
        <List>
            {console.log(reviews)}
            {reviews.map(review => (
                <ListItem alignItems="flex-start" key={review.id}>
                    <ListItemText
                        primary="{user id goes here}"
                        secondary={
                            <Fragment>
                                <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary"
                                    >
                                    {starGenerator(review.stars)
                                        .map(star => star?<StarRateIcon />:<StarOutlineIcon />)
                                    } {moment(1622463553612).startOf('hour').fromNow()}
                                </Typography>
                                <Typography
                                    component="div"
                                    variant="overline"
                                >
                                    {review.review}
                                </Typography>
                            </Fragment>
                        }
                    />
                </ListItem>
            ))}
        </List>
    )
}

export default Review;