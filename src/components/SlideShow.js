import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import bowls from '../pics/bowls.jpg'
import chicken from '../pics/chicken.jpg'
import sliced from '../pics/vegetable.jpg'
import '../App.css'

const items = [
    {
        id: 1,
        src: bowls

    },
    {
        id: 2,
        src: chicken
    },
    {
        id: 3,
        src: sliced
    }
];

const SlideShow = () => {
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
                className='custom-tag'
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img className='imgSlideShow' src={item.src} alt={item.altText} width='100%' minHeight='100%' style={{ background: 'transparent', backgroundSize: 'contain' }} />
                <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>

        );
    });

    return (
        <div>
            <style>
                {
                    `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
                }
            </style>
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
        </div>
    );
}

export default SlideShow

// const customTag = {
//     maxWidth: '100 %',
//     height: '500px',
//     background: 'transparent'
// }