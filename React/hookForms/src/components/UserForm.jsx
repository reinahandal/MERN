import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    return (
        <div>
        <form>
            <div>
                <label>First Name</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}></input>
            </div>
        </form>
        <table>
            <tr>
                <td>First Name</td>
                <td>{firstName}</td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td>{lastName}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{email}</td>
            </tr>
            <tr>
                <td>Password</td>
                <td>{password}</td>
            </tr>
            <tr>
                <td>Confirm Password</td>
                <td>{confirmPassword}</td>
            </tr>
        </table>
        </div>
    )
}

export default UserForm
