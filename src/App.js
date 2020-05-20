import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import * as yup from 'yup';
import RegisterForm from './components/RegisterForm';
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

    let [formData, setFormData] = useState(initialFormData);
    let [formErrors, setFormErrors] = useState(initialFormErrors);


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
                        <RegisterForm inputChangeHandler={inputChangeHandler} formData={formData} formErrors={formErrors} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
