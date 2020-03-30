import React, { useState, useContext } from 'react'
import { ContextAPI } from './ContextAPI'
import { Card, CardImg } from 'reactstrap'

import { Link } from 'react-router-dom'

function MostSeen() {
    const [recipes, setRecipes] = useContext(ContextAPI)
    return (
        <div className="recipies-section">
            {recipes.map(rec => (
                <Card
                    className="card">
                    <CardImg
                        className="card-image"
                        top
                        width="100px"
                        src={`https://spoonacular.com/recipeImages/${rec.image}`}
                        alt={rec.title}
                    />
                </Card>
                
            ))}
        </div>
    )
}


export default MostSeen
