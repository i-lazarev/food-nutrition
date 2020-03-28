import React, { useState, createContext, useEffect } from 'react'

export const ContextAPI = createContext();

export const RecipeProvider = (props) => {

    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = async () => {
        const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=3&offset=0&query=tomato", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "57c6580995msh16a1bdca19a22f4p19d9c9jsn96e04208e387"
            }
        })
        const data = await response.json()
        setRecipes(data.results)
        // console.log(data.results);
    }

    const [recipes, setRecipes] = useState([])


    return (
        <ContextAPI.Provider value={[recipes, setRecipes]}>
            {props.children}
        </ContextAPI.Provider>
    )
}