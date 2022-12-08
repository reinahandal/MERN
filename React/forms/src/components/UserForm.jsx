import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fNameError, setFNameError] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwError, setPWError] = useState("");
    const [confirmPWError, setConfirmPWError] = useState("");
    
    const handleFirstName = (e) => {
        if(e.target.value.length<2 && e.target.value.length>0){
            setFNameError("First Name must be at least 2 characters")
        } else {
            setFNameError("");
            setFirstName(e.target.value);
        }
    }
    const handleLastName = (e) => {
        if(e.target.value.length<2 && e.target.value.length>0){
            setLNameError("Last Name must be at least 2 characters");
        } else {
            setLNameError("");
            setLastName(e.target.value);
        }
    }
    const handleEmail = (e) => {
        if(e.target.value.length<5 && e.target.value.length>0) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
            setEmail(e.target.value);
        }
    }
    const handlePW = (e) => {
        if(e.target.value.length<8 && e.target.value.length>0) {
            setPWError("Password must be at least 8 characters");
        } else {
            setPWError("");
            setPassword(e.target.value);
        }
    }

    const handleConfirmPW = (e) => {
        if(e.target.value!==password && e.target.value.length>0) {
            setConfirmPWError("Passwords must match");
        } else {
            setConfirmPWError("");
            setConfirmPassword(e.target.value);
        } 
    }

    return (
        <div className='container mt-5'>
        <form>
            <div className='mb-3'>
                <label className='form-label'>First Name</label>
                <input type="text" className='form-control' onChange={handleFirstName}></input>
                {
                    fNameError ? <p className='text-danger small mt-3'>{fNameError}</p> : ''
                }
            </div>
            <div className='mb-3'>
                <label className='form-label'>Last Name</label>
                <input type="text" className='form-control' onChange={handleLastName}></input>
                {
                    lNameError ? <p className='text-danger small mt-3'>{lNameError}</p> : ''
                }
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type="email" className='form-control' onChange={handleEmail}></input>
                {
                    emailError ? <p className='text-danger small mt-3'>{emailError}</p> : ''
                }
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type="password" className='form-control' onChange={handlePW}></input>
                {
                    pwError ? <p className='text-danger small mt-3'>{pwError}</p> : ''
                }            
            </div>
            <div className='mb-3'>
                <label className='form-label'>Confirm Password</label>
                <input type="password" className='form-control' onChange={handleConfirmPW}></input>
                {
                    confirmPWError ? <p className='text-danger small mt-3'>{confirmPWError}</p> : ''
                }
            </div>
        </form>
        <table className='table table-hover mt-4'>
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
