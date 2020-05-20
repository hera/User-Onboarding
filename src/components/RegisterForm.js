import React from 'react';
import { Button, Form, FormGroup, Label, Input, UncontrolledAlert } from "reactstrap";

function RegisterForm (props) {
    let { inputChangeHandler, submitHandler, formErrors, disabled } = props;

    return (
        <Form>
            <div>
                {
                    Object.keys(formErrors).map((item, key) => {
                        if (formErrors[item]) {
                            return (
                                <UncontrolledAlert color="danger" key={key}>
                                    {formErrors[item]}
                                </UncontrolledAlert>
                            );
                        }
                        return null;
                    })
                }
            </div>
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
                    <Input type="checkbox" name="agree" onChange={inputChangeHandler} />{' '}
                    I agree with terms of service
                </Label>
            </FormGroup>
            <br />
            <Button color="primary" disabled={disabled} onClick={submitHandler}>Register</Button>
        </Form>
    );
}

export default RegisterForm;