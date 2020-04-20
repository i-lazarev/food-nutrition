import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryOne() {
    const [recipes, setRecipes] = useState([]);
    const key = 'd89d17872b3f4f8fa0da39073a9defdf'

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = () => {
        fetch(
            `https://api.spoonacular.com/recipes/search?query=Vegetarian&number=5&apiKey=${key}`,
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
    return (
        <div>
            <h5 style={{ marginLeft: "20px", marginTop: "10px" }}>Vegetarian</h5>
            <div style={Section}>
                {recipes.map((rec) => (
                    <div style={card} key={rec.id}>
                        <img
                            style={cardImg}
                            top="true"
                            width="100px"
                            src={`https://spoonacular.com/recipeImages/${rec.image}`}
                            alt={rec.title}
                        />
                    </div>
                ))}
            </div>
            <Link to='/recipes' style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>

                Show more
            </Link>
           </div>
    );
}

export default CategoryOne;

const Section = {
    display: "webkit-box",
    display: "ms-lexbox",
    display: "flex",
    msFlexWrap: "wrap",
    flexWrap: "wrap",
    msFlexPack: "distribute",
    justifyContent: "space-around",
    marginTop: "15px",
};

const card = {
    width: "200px",
    minHeight: "200px",
    lineHeight: "200px",
};

const cardImg = {
    width: "200px",
    height: "200px",
    lineHeight: "200px",
    fontWeight: "100",
    boxShadow: "2px 1px 10px 2px rgb(150, 144, 147)",
};

const title = {
    marginTop: "10px",
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontStyle: "italic",
};
