import ShowCase from '../recycle/ShowCaseComponent';
import Locations from './LocationsComponent';
import { Fragment } from 'react';

const showCaseImg = {
    src: '/assests/tempImgs/pexels-lood-goosen-1235717.jpg',
    credit: "Photo by Rachel Claire from Pexels",
    altText: "Coffee images for show case"
}

const locationNames = [
    {
        streetName: "Durbar Marga",
        placeName: "Kathmandu"
    },
    {
        streetName: "Jawlakhel",
        placeName: "Lalitpur"
    },
    {
        streetName: "Durbar Square",
        placeName: "Bhaktapur"
    }
]


function ContactUs () {
    return (
        <Fragment>
            <ShowCase 
                showCaseImg={showCaseImg}
                color={"white"}
                fontFamily={"'Old Growth',Arial,sans-serif"}
                overlayText={"contact us"}
                variant={'subtitle1'}
            />
            <Locations 
                locations={locationNames}
            />
        </Fragment>
    )
}

export default ContactUs;