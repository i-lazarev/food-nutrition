import React, { useState, createContext, useEffect } from 'react'

export const ContextAPI = createContext();

export const RecipeProvider = (props) => {

    const [query, setQuery] = useState('')

    // useEffect(() => {
    //     getRecipes()
    // }, [])

    // const getRecipes = () => {
    //     fetch(`https://api.spoonacular.com/recipes/search?${query}=apple&apiKey=d89d17872b3f4f8fa0da39073a9defdf`, {
    //         "method": "GET",
    //         'Content-Type': 'application/json'
    //     })
    //         .then(res => res.json())
    //         .then(res => setQuery(res.results))
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    return (
        <ContextAPI.Provider value={[query, setQuery]}>
            {props.children}
        </ContextAPI.Provider>
    )
}