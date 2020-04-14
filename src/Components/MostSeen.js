import React, { useState, useEffect } from 'react'
import { Card, CardImg } from 'reactstrap'

function MostSeen() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = () => {
        fetch(`https://api.spoonacular.com/recipes/search?query=apple&number=3&apiKey=d89d17872b3f4f8fa0da39073a9defdf`, {
            "method": "GET",
            'Content-Type': 'application/json'
        })
            .then(res => res.json())
            .then(res => setRecipes(res.results))
            // .then(res => console.log(res.results))
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div style={recSection}>
            {recipes.map(rec => (
                <Card
                    style={card} key={rec.id}>
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
    WebkitBoxShadow: '4px 1px 10px 4px rgb(223, 60, 60)',
    boxShadow: '2px 1px 10px 2px rgb(150, 144, 147)'
}

const cardImage = {
    maxHeight: '100',
    borderRadius: '1px'
}
