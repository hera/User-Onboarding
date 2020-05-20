import React from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function RegisterForm (props) {
    let { inputChangeHandler, checkboxChangeHandler, formData } = props;

    return (
        <Form>
            <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input type="text" name="name" id="name" onChange={inputChangeHandler} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">E-mail:</Label>
                <Input type="email" name="email" id="email" onChange={inputChangeHandler} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="pass">Password:</Label>
                <Input type="password" name="pass" id="pass" onChange={inputChangeHandler} />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="agree" onChange={checkboxChangeHandler} />{' '}
                    I agree with terms of service
                </Label>
            </FormGroup>
            <br />
            <Button color="primary">Register</Button>
        </Form>
    );
}

export default RegisterForm;