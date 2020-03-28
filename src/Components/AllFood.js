import React, { useState, useContext } from 'react'
import { ContextAPI } from './ContextAPI'
import { Card, CardImg } from 'reactstrap'
import { Animated } from "react-animated-css";

import { Link } from 'react-router-dom'

function AllFood() {
    const [recipes, setRecipes] = useContext(ContextAPI)


    return (
        <div className="recipies-section">
            {recipes.map(rec => (
                <Animated key={rec.id} animationIn="fadeIn"><Card
                    className="card"

                >
                    <CardImg
                        className="card-image"
                        top
                        width="100px"
                        src={`https://spoonacular.com/recipeImages/${rec.image}`}
                        alt={rec.title}

                    />
                </Card>
                </Animated>
            ))}
        </div>
    )
}


export default AllFood
