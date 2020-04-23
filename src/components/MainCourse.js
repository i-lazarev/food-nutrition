import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/MainCourse.css";


function MainCourse() {
  const [recipes, setRecipes] = useState([]);
  const history=useHistory();

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    fetch(
      `https://api.spoonacular.com/recipes/search?&type=Main Course&offset=2&number=5&apiKey=${process.env.REACT_APP_API_IN_USE} `,
      {
        method: "GET",
        "Content-Type": "application/json",
      }
    )
      .then((res) => res.json())
      .then((res) => setRecipes(res.results))
      .catch((err) => {
        console.log(err);
      });
  };

  const showMore1 = ()=>{
    history.push({ pathname: "/recipes", state: { type: 'Main Course' } });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="CourseTitle"
        style={{
          textAlign: "left",
          fontSize: "54px",
          backgroundColor: "#F94F72",
          fontWeight: "900",
          padding: "20px",
          color: "#fff",
          position: "relative",
          marginBottom: "15px"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "150px",
            bottom: "-40px",
            backgroundColor: "#ededed",
            width: "20px",
            height: "200px",
            transform: "rotate(45deg)",
          }}
        ></div>
        Main Course
      </div>
      <div style={Section}>
        {recipes.map((rec) => (
          <Link key={rec.id} to={`recipe/${rec.id}`} style={title}>
            <div
              style={card}
              key={rec.id}
              className="animationCard hvr-wobble-to-bottom-right"
            >
              <img
                className="card-image-all-food"
                width="100px"
                src={`https://spoonacular.com/recipeImages/${rec.image}`}
                alt={rec.title}
              />
              {rec.title.split(" ").slice(0, 4).join(" ")}
            </div>
          </Link>
        ))}
      </div>
      <div className="mainShowMore" onClick={showMore1}>
        Show More >>
      </div>
    </div>
  );
}
export default MainCourse;

const Section = {
  display: "webkit-box",
  display: "ms-lexbox",
  display: "flex",
  msFlexWrap: "wrap",
  flexWrap: "wrap",
  msFlexPack: "distribute",
  justifyContent: "space-around",
  marginTop: "15px",
  backgroundSize: "cover",
};

const card = {
  width: "200px",
  minHeight: "200px",
  borderRadius: "50%",
  MozBorderRadius: "50%",
  WebkitBorderRadius: "50%",
};

const title = {
  marginTop: "15px",
  textAlign: "center",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontStyle: "italic",
};
