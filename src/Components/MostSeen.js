import React, { useState, useEffect } from 'react'
import { Card, CardImg } from 'reactstrap'

function MostSeen() {
    const [recipe, setRecipe] = useState([])
    const key = 'd89d17872b3f4f8fa0da39073a9defdf'

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = () => {
        fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=${key}`, {
            "method": "GET",
            'Content-Type': 'application/json'
        })
            .then(res => res.json())
            .then(res => setRecipe(res.recipes))
            // .then(res => console.log(res.recipes))
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div style={recSection}>
            {recipe.map(rec => (
                <Card
                    style={card} key={rec.id}>
                    <CardImg
                        style={cardImage}
                        top
                        width="100px"
                        src={rec.image}
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
    WebkitBoxShadow: '4px 1px 10px 4px rgb(223, 60, 60)',
    boxShadow: '2px 1px 10px 2px rgb(150, 144, 147)'
}

const cardImage = {
    maxHeight: '100',
    borderRadius: '1px'
}
