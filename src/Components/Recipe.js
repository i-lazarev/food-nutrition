import React from 'react'

function Recipe({title, image}) {
    return (
        <div>
            <img src={image} alt=""/>
            <li>{title}</li>
        </div>
    )
}


export default Recipe
