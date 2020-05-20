import React from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function RegisterForm (props) {
    return (
        <Form>
            <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input type="text" name="name" id="name" size="lg" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">E-mail:</Label>
                <Input type="email" name="email" id="email" size="lg" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="pass">Password:</Label>
                <Input type="password" name="pass" id="pass" size="lg" />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" />{' '}
                    I agree with terms of service
                </Label>
            </FormGroup>
            <Button size="lg">Register</Button>
        </Form>
    );
}

export default RegisterForm;