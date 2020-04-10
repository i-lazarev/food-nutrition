import React, { useState, useEffect } from 'react'

function AllFood() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = () => {
        fetch(`https://api.spoonacular.com/recipes/search?query=apple&number=5&apiKey=d89d17872b3f4f8fa0da39073a9defdf`, {
            "method": "GET",
            'Content-Type': 'application/json'
        })
            .then(res => res.json())
            .then(res => setRecipes(res.results))
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div style={Section}>
            {recipes.map(rec => (
                <div style={card}>
                    <img
                        className="card-image-all-food"
                        top='true'
                        width="100px"
                        src={`https://spoonacular.com/recipeImages/${rec.image}`}
                        alt={rec.title} />
                    <h4 style={title}>{rec.title}</h4>
                </div>
            ))}
        </div>
    )
}


export default AllFood

const Section = {
    display: 'webkit-box',
    display: 'ms-lexbox',
    display: 'flex',
    msFlexWrap: 'wrap',
    flexWrap: 'wrap',
    msFlexPack: 'distribute',
    justifyContent: 'space-around',
    marginTop: '15px'
}

const card = {
    width: '200px',
    minHeight: '200px',
    lineHeight: '200px',
    borderRadius: '50%',
    MozBorderRadius: '50%',
    WebkitBorderRadius: '50%'
}

const title = {
    marginTop: '10px',
    textAlign: 'center',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontStyle: 'italic'
}