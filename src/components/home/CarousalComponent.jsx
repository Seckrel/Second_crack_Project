import { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import CreditImg from '../recycle/CreditImgComponent'


// TODO
const items = [
    {
      src: '/assests/tempImgs/pexels-juan-pablo-serrano-arenas-894695.jpg',
      altText: 'Coffee photo 1',
      credit: 'Photo by Juan Pablo Serrano Arenas from Pexels'
    },
    {
      src: '/assests/tempImgs/pexels-dominika-roseclay-977882.jpg',
      credit: 'Photo by Dominika Roseclay from Pexels'
    },
    {
      src: '/assests/tempImgs/pexels-burst-374885.jpg',
      credit: 'Photo by Brust from Pexels'
    }
  ];

  

function ShowCase(){
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);


  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <CreditImg credit={item.credit} src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });


    return(
      <Container
        disableGutters
      >
        <Paper elevation={3}>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        </Paper>
      </Container>
      
    )
}

export default ShowCase