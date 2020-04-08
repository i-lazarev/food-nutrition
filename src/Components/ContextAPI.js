import React, { useState, createContext, useEffect } from 'react'

export const ContextAPI = createContext();

export const RecipeProvider = (props) => {

    // const API_KEY = '0d88ab02f8954c859a43c6cc733c14d5'

    // useEffect(() => {
    //     getRecipes()
    // }, [])


    // const getRecipes = () => {
    //     fetch(`https://api.spoonacular.com/recipes/${match.params.id}/information?amount=1&apiKey=0d88ab02f8954c859a43c6cc733c14d5`, {
    //         "method": "GET",
    //         'Content-Type': 'application/json' 
    //     })
    //         .then(response => {
    //             console.log(response.json());
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    const [recipes, setRecipes] = useState([])


    return (
        <ContextAPI.Provider value={[recipes, setRecipes]}>
            {props.children}
        </ContextAPI.Provider>
    )
}