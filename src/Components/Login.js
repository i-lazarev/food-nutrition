import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import LoginHeader from './LoginHeader';



const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        setEmail(prevEmail => [...prevEmail, email])
        setEmail('')
    }
    return (
        <div>
        <LoginHeader/>
        <Container>
            <Form onSubmit={submit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="something@idk.cool"
                        value={email}
                        onChange={emailChange}

                    />
                </FormGroup>
                <FormGroup className="mt-4 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="don't tell!"
                        value={password}
                        onChange={passwordChange}
                    />
                </FormGroup>
                <Button className="mt-4">Login</Button>
            </Form>
        </Container>
        </div>
    );
}

export default Login;