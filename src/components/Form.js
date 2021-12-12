import React, { useState } from 'react';

const Form = (props) => {
    const [list, setList] = useState([]);

    const [firstName, setFirstName] =  useState("");
    const [firstNameError, setFirstNameError] = useState("");
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First Name must be more than 2 characters.");
        }else {
            setFirstNameError("");
        }
    }

    const [lastName, setLastName] =  useState("");
    const [lastNameError, setLastNameError] = useState("");
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last Name must be more than 2 characters.");
        }else {
            setLastNameError("");
        }
    }

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be more than 2 characters.");
        }else {
            setEmailError("");
        }
    }

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be more than 2 characters.");
        }else {
            setPasswordError("");
        }
    }
    
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const createUser = (e) => {
        e.preventDefault();

        setList([...list, {firstName: firstName,lastName: lastName,email : email,password : password}])

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        const newUser = { firstName, lastName, email, password };
        
        console.log("welcome", newUser);

    };

    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input value={firstName} type="text" onChange={ handleFirstName } />
            </div>
            {firstNameError ? <p>{firstNameError}</p> : null}
            <div>
                <label>Last Name: </label>
                <input value={lastName} type="text" onChange={ handleLastName } />
            </div>
            {lastNameError ? <p>{lastNameError}</p> : null}
            <div>
                <label>Email Address: </label> 
                <input value={email} type="text" onChange={ handleEmail } />
            </div>
            {emailError ? <p>{emailError}</p> : null}
            <div>
                <label>Password: </label>
                <input value={password} type="password" onChange={ handlePassword } />
            </div>
            {passwordError ? <p>{passwordError}</p> : null}
            <div>
                <label>Confirm Password: </label>
                <input value={confirmPassword} type="password" onChange={ (e) => setConfirmPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h2>First Name: {firstName}</h2>
        <h2>Last Name {lastName}</h2>
        <h2>Email: {email}</h2>

        {
            list.map((user)=>(
                <div>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))
        }
    </div>
    );
};

export default Form;