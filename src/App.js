import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import RegisterForm from "./components/RegisterForm";

function App() {


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
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
