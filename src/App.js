import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import RegisterForm from "./components/RegisterForm";

function App() {
    const initialFormData = {
        name: '',
        email: '',
        pass: '',
        agree: ''
    };

    let [formData, setFormData] = useState(initialFormData);

    function inputChangeHandler (event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    function checkboxChangeHandler (event) {
        if (formData.agree) {
            setFormData({...formData, 'agree': ''});
        } else {
            setFormData({...formData, 'agree': 'on'});
        }
    }

    useEffect(() => {
        console.log(formData);
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
                        <RegisterForm inputChangeHandler={inputChangeHandler} formData={formData} checkboxChangeHandler={checkboxChangeHandler} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
