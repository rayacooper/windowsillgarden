    import React, {useState} from 'react';
    import {Link} from 'react-router-dom';
    import axios from 'axios';
    import './../Login/Login.css';

    const Register = (props) => {

        const register = () => {
            console.log('Register it up yo')
            props.history.push('/home')
        }

        let [userEmail, updateUserEmail] = useState('')
        let [userPassword, updateUserPassword] = useState('')
        let [userPasswordRetype, updateUserPasswordRetype] = useState('')

        return(
            <div className="LoginMain">
                <div className="LoginBox">
                    <h1>Register</h1>
                    <input type='text' placeholder='email' onChange={(e) => {updateUserEmail(e.target.value)}}/>
                    <input type='password' placeholder='password' onChange={(e) => {updateUserPassword(e.target.value)}}/>
                    <input type='password' placeholder='re-type password' onChange={(e) => {updateUserPasswordRetype(e.target.value)}}/>
                    <button onClick={() => {register()}}>Register</button>
                    
                    Or sign up with
                    <div className="LoginHelp">
                        <button>Facebook</button>
                        <button>Google</button>
                </div>
                    Already have an account? <Link to="/">Login here</Link> 
                </div>            
            </div>
        )
    }

    export default Register;