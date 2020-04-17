import React, { useState, useEffect } from 'react'
import { NavLink } from 'reactstrap'


function MostSeen() {

    const [recipes, setRecipes] = useState([])
    const key = 'd89d17872b3f4f8fa0da39073a9defdf'

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = () => {
        fetch(`https://api.spoonacular.com/recipes/search?&apiKey=${key}`, {
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
        <div>
            <h3 className='container'>TRENDING RECIPES</h3>
            <div style={Section}>
                {recipes.map(rec => (

                    <div style={card} key={rec.id}>
                        <img
                            className="card-image-all-food"
                            top='true'
                            width="100px"
                            src={`https://spoonacular.com/recipeImages/${rec.image}`}
                            alt={rec.title} />
                        <a href=''>{rec.title}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default MostSeen

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