import React, { useState } from 'react';
import {
    Collapse, 
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


const LoginHeader = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">food-nutrition</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem style={{ marginLeft: '400px', fontSize: '25px' }}>
                            <NavLink href='Login'>Log in</NavLink>
                        </NavItem>

                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default LoginHeader;


