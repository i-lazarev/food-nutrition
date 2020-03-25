import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Form,
    Input
} from 'reactstrap';
import {Link} from 'react-router-dom'


const HomePage = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                        <Form style={{ marginLeft: '250px'}}>
                            <Input type='text' placeholder='Search' style={{ marginTop: '5px', width: '15rem'}}/>
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
        </div>
    );
}

export default HomePage;


