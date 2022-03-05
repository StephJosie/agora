import React from "react";
import "./Register.css"
import { useState } from "react";
import EmailInput from "../EmailInput/EmailInput"

export default function Register({ setOpenRegister }) {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },

        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="modalBG">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {
                        setOpenRegister(false);
                    }}> X </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="title">
                        <h1>Create User Profile</h1>
                        {inputs.map((input) => (
                            <EmailInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                    </div>
                    <div className="body">
                        <p>choose a unique username and secure password in order to continue</p>
                    </div>
                    <div className="footer">
                        <button onClick={() => {
                            setOpenRegister(false);
                        }}>Cancel</button>
                        <button>Submit</button>

                    </div>
                </form>
            </div>
        </div>


    );

}