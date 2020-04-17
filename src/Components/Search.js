import React, { useState, useContext } from 'react';
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
import { ContextAPI } from './ContextAPI'


const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useContext(ContextAPI)

    const updateSearch = (e) => {
        setSearch(e.target.value)
        console.log(search);
    }

    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search )
        console.log(query);
        setSearch('')
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
                            <Input
                                type='text'
                                placeholder='Search'
                                value={search}
                                onChange={updateSearch}
                            />
                            <Button type='submit'>
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
        </div>
    );
}

export default Search;


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