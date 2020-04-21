import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import bowls from "../assets/bowls.jpg";
import chicken from "../assets/chicken.jpg";
import sliced from "../assets/vegetable.jpg";
import "../App.css";

const items = [
  {
    id: 1,
    src: bowls,
    caption: "MORE THAN 300K RECIPES,",
  },
  {
    id: 2,
    src: chicken,
    caption: "24 INTERNATIONAL CUISINES,",
  },
  {
    id: 3,
    src: sliced,
    caption: "A VARIETY OF DIETS & A LOT MORE!!!",
  },
];

const SlideShow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          className="imgSlideShow"
          src={item.src}
          alt={item.src}
          width="100%"
          height="100%"
          style={{
            height: "100%",
            width: "100%",
            background: "transparent",
            backgroundSize: "contain",
          }}
        />
       
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
             width: 100%;
              height: 500px;
              background: black;
              z-index: 1;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default SlideShow;
