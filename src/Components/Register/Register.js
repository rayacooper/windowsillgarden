import React, {useState} from 'react';

const Register = () => {

    const [userEmail, updateUserEmail] = useState('')
    const [userPassword, updateUserPassword] = useState('')

    return(
        <div className="RegisterMain">
            Register
            <input type='text' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input type='password' placeholder='re-type password'/>
            <button>Login</button>
        </div>
    )
}

export default Register;