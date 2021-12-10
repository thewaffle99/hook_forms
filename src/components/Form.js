import React, { useState } from 'react';

const Form = (props) => {
    const [list, setList] = useState([]);

    const [firstName, setFirstName] =  useState("");
    const [lastName, setLastName] =  useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        setList([...list, {
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        }])
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        const newUser = {
            firstName, lastName, email, password
        };
        console.log("welcome", newUser);

    };
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input value={firstName} type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label>
                <input value={lastName} type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input value={email} type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input value={password} type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input value={confirmPassword} type="text" onchange={ (e) => setConfirmPassword(e.tartet.value)}/>
            </div>
            <input type="submit" value="Create User" />
        </form>
        {
            list.map((user, index)=>(
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