import React, { useState, useEffect, useContext } from 'react';
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
    Button,
} from 'reactstrap';
import MostSeen from './MostSeen';
import AllFood from './AllFood';
import {ContextAPI} from './ContextAPI'


const HomePage = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useContext(ContextAPI)

    // useEffect(() => {
    //     getRecipes()
    // }, [query])

    // const getRecipes = async () => {
    //     const response = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=3&offset=0&query=${query}`, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    //             "x-rapidapi-key": "57c6580995msh16a1bdca19a22f4p19d9c9jsn96e04208e387"
    //         }
    //     })
    //     const data = await response.json()
    //     setRecipes(data.results)
    //     // console.log(data.results);
    // }

    const updateSearch = (e) => {
        setSearch(e.target.value)
        console.log(search);
    }

    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    return (
        <div >
            <Navbar color="light" light expand="md" >
                <NavbarBrand href="/">food-nutrition</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar style={mainDiv}>
                        <NavItem >
                            <NavLink href="/recipes">Recipes</NavLink>
                        </NavItem>
                        <Form
                            onSubmit={getSearch}
                            style={{ "display": "flex" }}

                        >
                            <Input type='text'
                                placeholder='Search'
                                value={search}
                                name='search'
                                onChange={updateSearch}
                            />

                            <Button style={icon} type='submit'>
                                <img src="https://img.icons8.com/android/24/000000/search.png" alt=''
                                />
                                search
                            </Button>

                        </Form>
                        <NavItem >
                            <NavLink href="/creat-an-account">Create an account</NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink href="/Login" >Log in</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <MostSeen />
            <AllFood />
        </div>
    );
}

export default HomePage;


const icon = {
    border: 'none',
    backgroundColor: 'transparent',
    width: '10px',
    height: '10px',
}

const mainDiv = {
    width: '100%',  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}