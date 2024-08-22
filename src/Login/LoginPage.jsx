import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import './LoginPage.css';
import { toast } from 'react-toastify';

function LoginPage() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const InputHandler = (event) => {
        const { name, value } = event.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value
        }));
    };

    const [message, setMessage] = useState(null);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const Login = async (e) => {
        e.preventDefault();
        const { email, password } = input;

        if (email && password) {
            setSubmitButtonDisabled(true);
            signInWithEmailAndPassword(auth, email, password)
                .then(async (res) => {
                    setSubmitButtonDisabled(false);
                    navigate("/");
                    setMessage(toast.success("Login Successful!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: undefined,
                        theme: "dark",
                        style: {
                            width: "80%",
                            maxWidth: "300px",
                            margin: "0 auto",
                            fontSize: "14px"
                        },
                    }));
                })
                .catch((error) => {
                    setSubmitButtonDisabled(false);
                    setMessage(toast.error(error.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: undefined,
                        theme: "dark",
                        style: {
                            width: "80%",
                            maxWidth: "300px",
                            margin: "0 auto",
                            fontSize: "14px"
                        },
                    }));
                });

            setInput({
                email: "",
                password: ""
            });
        } else {
            toast.error("Please fill all the fields!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "dark",
                style: {
                    width: "70%",
                    maxWidth: "300px",
                    margin: "0 auto",
                    fontSize: "14px"
                },
            });
        }
    };

    return (
        <Fragment>
            <form>
                <h1>LOGIN</h1>
                Email:<input required name='email' onChange={InputHandler} placeholder='Enter your Email' type='email' value={input.email} ></input><br />
                Password:<input required name='password' onChange={InputHandler} placeholder='Enter your Password' type="password" value={input.password} /><br />
                <button disabled={submitButtonDisabled} onClick={Login}>Log in</button>
                <p>
                    Don't have an account?{" "}
                    <span>
                        <Link to="/SignUp">Sign up</Link>
                    </span>
                </p>
            </form>
        </Fragment>
    );
}

export default LoginPage;