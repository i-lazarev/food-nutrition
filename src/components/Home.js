import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainCourse from "./MainCourse";
import SlideShow from "./SlideShow";
import Categories from "./Categories";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#ededed", position: "relative" }}>
      <Header />
      <SlideShow />
      <MainCourse />
      <Categories />
      <Footer />
    </div>
  );
}
