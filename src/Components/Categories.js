import React, { useState, useEffect, useContext } from 'react'
import { ContextAPI } from './ContextAPI'
import { NavLink } from 'reactstrap';

function Categories() {

    const [recipies, setRecipies] = useState([]);
    const [query, setQuery] = useContext(ContextAPI);
    const [diet, setDiet] = useState("");
    const [recipeNumber, setRecipeNumber] = useState(5);
    const key = 'd89d17872b3f4f8fa0da39073a9defdf'

    useEffect(() => {
        getRecipes()
    }, [ diet, query, recipeNumber])

    const dietArray = [
        "Pescetarian",
        "Lacto Vegetarian",
        "Ovo Vegetarian",
        "Vegan",
        "Paleo",
        "Primal",
        "Vegetarian"
    ];

    const getRecipes = () => {
        fetch(`https://api.spoonacular.com/recipes/search?query=Vegetarian&diet=${diet}&number=${recipeNumber}&apiKey=${key}`, {
            "method": "GET",
            'Content-Type': 'application/json'
        })
            .then(res => res.json())
            .then(res => setRecipies(res.results))
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <h5 style={{ marginLeft: '20px', marginTop: '10px' }}>Vegetarian</h5>
            <div style={Section}>
                {recipies.map(rec => (
                    <div style={card} key={rec.id}>
                        <img
                            style={cardImg}
                            top='true'
                            width="100px"
                            src={`https://spoonacular.com/recipeImages/${rec.image}`}
                            alt={rec.title} />
                    </div>
                ))}
            </div>
            <NavLink>Show more</NavLink>

            <h5 style={{ marginLeft: '20px', marginTop: '10px' }}> Vegan</h5>
            <div style={Section}>
                {recipies.map(rec => (
                    <div style={card} key={rec.id}>
                        <img
                            style={cardImg}
                            top='true'
                            width="100px"
                            src={`https://spoonacular.com/recipeImages/${rec.image}`}
                            alt={rec.title} />
                    </div>
                ))}
            </div>
            <NavLink>Show more</NavLink>
        </div>


    )
}

export default Categories

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
    lineHeight: '200px'
}

const cardImg = {
    width: '200px',
    height: '200px',
    lineHeight: '200px',
    fontWeight: '100',
    boxShadow: '2px 1px 10px 2px rgb(150, 144, 147)'
}