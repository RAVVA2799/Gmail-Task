import React from 'react';
import JSONDATA from '../assets/data/cred.json'
import { useState } from 'react'
import NavLink from 'next/link';
import Router from 'next/router';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
// import Dashboard from './dashboard'
// import { useNavigate} from "react-router-dom";

let minLengthUserId: number;
let minLength: number;
let maxLength: number;
let maxPassword: number;

minLengthUserId=10;
minLength = 5;
maxLength = 5;
maxPassword = 10;


function SignIn() {


    const [searchTerm, setSearchTerm] = useState('')
    const [password, setPassword] = useState(null)
    const [print, setPrint] = useState(false)
    const [edit, setEdit] = useState('')
    const [auth, setAuth] = useState(false);

 
    if (auth) {

        return (
            <>
                <NavLink href="/gmaildashboard"></NavLink>
            </>
        )
    }

    function getPassword(pass: { target: { value: any; }; }) {
        setPassword(pass.target.value)
        setPrint(false)
        console.warn(pass.target.value)
    }

   
    function handleLogin() {
        // perform login logic here
        alert("Invalid User ..Fill the details Again")
        // Router.push('/SignIn')
           // when this function is called, Router will push this web Page
        return(
            <NavLink className="nav-link" aria-current="page" href="/SignIn">

            </NavLink>
        )
    }
    function getEdit(ed: { target: { value: any; }; }) {
        setEdit(ed.target.value)

        console.warn(ed.target.value)
    }
   
    return (
        <div className="App 
        bg-white
         w-25 ms-5 
         border border-dark
         bg-light
         rounded
         text-center
         position-absolute top-50 start-50 translate-middle">
            <br />

            <h3 className='text-dark'>Sign in</h3>
            <p>to continue to Gmail</p>
            <br />
            {/* <form className="was-validated"> */}
                <form className="needs-validation" noValidate>
                <div className="mb-3 mt-3
                form-group was-validated">
                    <label htmlFor="uname"
                        className="
                    form-label
                    text-dark
                    d-flex justify-content-center"
                    >
                        Email:
                    </label>

                    <input
                        pattern="^([A-Za-z@.com]|[0-9])+$"
                        // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|(\d{3}-){2}\d{4}" 
                        placeholder="Email or phone"
                        id="emailId"
                        type="text"
                        minLength={minLengthUserId}
                        className=" w-75
                        form-control
                        mx-auto"
                        // form-control
                        onChange={event => { setSearchTerm(event.target.value) }}
                        required
                    />
                    <div className="valid-feedback">
                        {/* Valid. */}
                        </div>
                    {/* <div className="invalid-feedback">
                        Please fill out this field.
                    </div> */}

                    <div className="mb-3  form-group was-validated">
                        <label htmlFor="pwd" className="form-label text-dark">Password:</label>
                        <br/>
                        <input
                            type="password"
                            onChange={getPassword}
                            className=" w-75
                            form-control
                            mx-auto"
                            // form-control
                            maxLength={maxLength}
                            minLength={minLength}
                            id="pwd"
                            placeholder="Enter your password"
                            // title='Password must contain 1 small letter,1 capital letter,1 digit and must be 5-10 letters'
                            required />
                        {/* <sub>Min length is 5</sub> */}

                        <div className="valid-feedback">
                            {/* Valid */}
                            </div>
                        {/* <div className="invalid-feedback"> */}
                            {/* Please fill out this field. */}
                        {/* </div> */}
                    </div>

                    <div className="form-check mb-3">
                        <label className="form-check-label" htmlFor="myCheck">
                            <input className="form-check-input
                        mx-auto ms-1" type="checkbox" id="myCheck" name="remember" required />
                            I agree on clicking.</label>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Check this checkbox to continue.</div>
                    </div>
                    <br />
                    <span>

                        {/* <NavLink href="/dashboard"> */}

                        <button
                            type="submit"
                            onClick={(e) => {
                                // handleLogin
                                e.preventDefault();
                                var isValidUser = false;
                                let email = (document.getElementById("emailId") as HTMLInputElement).value;
                                let password = (document.getElementById("pwd") as HTMLInputElement).value;
                                console.log("email and password", email + "   " + password);
                                JSONDATA.forEach(element => {
                                    if (element.email === email && element.password === password) {
                                        isValidUser = true;
                                        //navigate to next page
                                    }
                                })
                                if (isValidUser) {
                                    alert("valid user");
                                    // next web page will be automatically re directed
                                    localStorage.setItem('UserId', JSON.stringify(email));
                                    localStorage.setItem('Password', JSON.stringify(password));
                                    Router.push('/gmaildashboard')
                                    // Router.push({pathname: '/dashboard', state:{pattern: this.state.searchText}})

                                }
                                // handleLogin()
                                else {
                                    alert("invalid user...Fill the details Again");
                                    isValidUser = false;
                                    Router.push('/SignIn')
                                    // handleLogin()
                                    // <NavLink href='/SignIn'></NavLink>
                                    // "window.location.href='http://localhost:3000';"
                                   
                                }
                                // userLogin()
                                setAuth(true)
                            }}
                            className="btn btn-success"
                        >
                            Submit
                        </button>
                        {/* </NavLink> */}
                        <button
                            type="submit"
                            className="btn btn-danger ms-3"
                            onClick={() => setEdit('')}>
                            RESET
                        </button>
                    </span>
                    {JSONDATA.filter((val) => {

                        if (searchTerm == "") {
                            // return val
                        }

                        //firstname is matched with search terms, when entered  in Lower case  also.
                        else if (val.email.toLowerCase().includes(searchTerm.toLowerCase())) {

                            // return val
                        }
                    }).map((val, key) => {

                        return (
                            <>
                                <div className="bg-success" key={key}>
                                    {/* <hr></hr>
                                    <p className="bg-primary">
                                        UserId:{val.email}
                                        <br/>
                                        Password: {val.password}
                                        <br></br> 
                                       
                                    </p> */}
                                </div>

                                {searchTerm}
                            </>
                        );
                    })}



                </div>

            </form>
        </div>
    );
}

export default SignIn;

