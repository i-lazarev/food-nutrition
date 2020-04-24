import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import bowls from "../assets/bowls.jpg";
import chicken from "../assets/chicken.jpg";
import sliced from "../assets/vegetable.jpg";
import "../App.css";

const items = [
  {
    id: 1,
    src: bowls,
    color: "#F94F72",
    size: "30px",
    caption: "MORE THAN 300K RECIPES,",
  },
  {
    id: 2,
    src: chicken,
    color: "#b526f2",
    size: "28px",
    caption: "24 INTERNATIONAL CUISINES,",
  },
  {
    id: 3,
    src: sliced,
    color: "#f8b652",
    size: "26px",
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
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        />
        <div
          className="textBox"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "550px",
            position: "absolute",
            top: "230px",
            left: "0",
            zIndex: "3",
          }}
        >
          <div
            style={{
              fontWeight: "900",
              fontFamily: "Bangers",
              padding: "5px",
              fontSize: item.size,
              boxSizing: "border-box",
              width: "320px",
              color: "#fff",
              textAlign: "center",
              backgroundColor: item.color,
            }}
          >
            {item.caption}
          </div>
        </div>
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
