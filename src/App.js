import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

import './App.css';
import RegisterForm from './components/RegisterForm';
import Users from './components/Users';
import registerFormSchema from './validation/registerFormSchema';


function App() {
    const initialFormData = {
        name: '',
        email: '',
        pass: '',
        agree: ''
    };

    const initialFormErrors = {
        name: '',
        email: '',
        pass: '',
        agree: ''
    };

    const SERVER_URL = 'https://reqres.in/api/users';


    let [formData, setFormData] = useState(initialFormData);
    let [formErrors, setFormErrors] = useState(initialFormErrors);
    let [disabled, setDisabled] = useState(true);
    let [usersData, setUsersData] = useState([]);


    function inputChangeHandler (event) {
        const field = event.target;

        if (field.getAttribute('type') === 'checkbox') {
            setFormData({...formData, [field.name]: field.checked});
        } else {
            setFormData({...formData, [field.name]: field.value});

            // 
            yup.reach(registerFormSchema, field.name)
            .validate(field.value)
            .then(valid => {

                // happy path: clear the error message for that field
                setFormErrors({...formErrors, [field.name]: ''});

            })
            .catch(err => {

                // oops: save the error message
                setFormErrors({...formErrors, [field.name]: err.errors[0]});

            });
        }
    }

    function submitHandler (event) {
        event.preventDefault();

        axios.post(SERVER_URL, formData)
            .then((response) => {
                setUsersData(response.data);
            })
            .catch((error) => {
                console.log("Axios error occured");
            });
    }


    // if data in the form is ok, enable the submit button

    useEffect(() => {
        registerFormSchema
            .isValid(formData).then(
                (valid) => {
                    if (valid && formData.agree) {
                        setDisabled(false);
                    } else {
                        setDisabled(true);
                    }
                })
    }, [formData]);

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <h1>New account</h1>
                    </div>
                </div>
                <div className="row row-cols-1">
                    <div className="col">
                        <RegisterForm inputChangeHandler={inputChangeHandler} submitHandler={submitHandler} formData={formData} formErrors={formErrors} disabled={disabled} />
                    </div>
                </div>
                <div className="row row-cols-1">
                    <div className="col">
                        <Users usersData={usersData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
