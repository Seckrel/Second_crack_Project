import { Fragment } from 'react'
import ShowCase from '../recycle/ShowCaseComponent'
import Info from './InformationComponent'

const showCaseImg = {
    src: '/assests/tempImgs/pexels-bimal-ranabhat-2104882.jpg',
    credit: 'Photo by Bimal Ranabhat from Pexels',
    altText: 'Image of Kathmandu',
}

function AboutUs() {
    return (
        <Fragment>
            <div
                className={"parent-container-flex"}
            >
                <ShowCase
                    showCaseImg={showCaseImg}
                    color={"white"}
                    fontFamily={"'Old Growth',Arial,sans-serif"}
                    overlayText={"our story"}
                />
                <Info />
            </div>
        </Fragment>
    )
}

export default AboutUs;

