import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Form,
    Input,
} from 'reactstrap';
import Recipe from './Recipe';


const HomePage = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [recipes, setRecipes] = useState([])


    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = async () => {
       const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=10&offset=0&query=burger", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "57c6580995msh16a1bdca19a22f4p19d9c9jsn96e04208e387"
            }
        })
        const data = await response.json()
           setRecipes(data.results)
           console.log(data.results);
    }

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">food-nutrition</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem style={{ marginLeft: '50px', fontSize: '20px' }}>
                            <NavLink href="/recipes">Recipes</NavLink>
                        </NavItem>
                        <Form style={{ marginLeft: '250px' }}>
                            <Input type='text' placeholder='Search' style={{ marginTop: '5px', width: '15rem' }} />
                        </Form>
                        <NavItem style={{ marginLeft: '100px', fontSize: '20px' }}>
                            <NavLink href="/creat-an-account">Create an account</NavLink>
                        </NavItem>
                        <NavItem style={{ marginLeft: '25px', fontSize: '20px' }}>
                            <NavLink href="/Login" >Log in</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>  
            {recipes.map(rec => (
                <Recipe title={rec.title} image={rec.image}/>
                
            ))}
        </div>
    );
}

export default HomePage;


