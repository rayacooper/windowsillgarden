    import React, {useState} from 'react';
    import {Link} from 'react-router-dom';
    import './../Login/Login.css';

    const Register = () => {

        const register = () => {
            console.log('Register it up yo')
        }

        const [userEmail, updateUserEmail] = useState('')
        const [userPassword, updateUserPassword] = useState('')
        const [userPasswordRetype, updateUserPasswordRetype] = useState('')

        return(
            <div className="LoginMain">
                <div className="LoginBox">
                    <h1>Register</h1>
                    <input type='text' placeholder='email'/>
                    <input type='password' placeholder='password'/>
                    <input type='password' placeholder='re-type password'/>
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