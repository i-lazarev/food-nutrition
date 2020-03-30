import React, { useState, useContext } from 'react'
import { ContextAPI } from './ContextAPI'
import { Card, CardImg } from 'reactstrap'

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

const recSection {

    display: 'webkit-box',
    display: 'ms-lexbox',
    display: 'flex',
    msFlexWrap: 'wrap',
    flexWrap: 'wrap',
    msFlexPack: 'distribute',
    justifyContent: 'space-around'
}