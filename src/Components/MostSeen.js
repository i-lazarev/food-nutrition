import React, { useState, useContext } from 'react'
import { ContextAPI } from './ContextAPI'
import { Card, CardImg } from 'reactstrap'

function MostSeen() {
    const [recipes, setRecipes] = useContext(ContextAPI)
    return (
        <div style={recSection}>
            {recipes.map(rec => (
                <Card
                    style={card}>
                    <CardImg
                        style={cardImage}
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

const recSection = {
    display: 'webkit-box',
    display: 'ms-lexbox',
    display: 'flex',
    msFlexWrap: 'wrap',
    flexWrap: 'wrap',
    msFlexPack: 'distribute',
    justifyContent: 'space-around'
}

const card = {
    width: '250px',
    minHeight: '250px',
    margin: '20px',
    borderRadius: '20px',
    webkitBoxShadow: '4px 1px 10px 4px rgb(223, 60, 60)',
    boxShadow: '2px 1px 10px 2px rgb(150, 144, 147)'
}

const cardImage = {
    maxHeight: '100' ,
    borderRadius: '1px'
}
