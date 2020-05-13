import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Login.css'

const Login = (props) => {

    let [rememberChecked, updateRememberChecked] = useState(true)
    let [userEmail, updateUserEmail] = useState('');
    let [userPassword, updateUserPassword] = useState('');

    const login = () => {
        axios.get('/ping')
            .then(repone => {
                if (repone.data === "Oh, Hello!"){
                    props.history.push('/home')
                }
            })
    }

    return(
        <div className="LoginMain">
            <div className='LoginBox'>
                <h1>Login</h1>
                <input type="text" placeholder="Email" onChange={(e) => updateUserEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => updateUserPassword(e.target.value)}/>
                <div className="LoginRememberCheck">
                    <input type="checkbox" id="remember" name="remember" defaultChecked onClick={() => updateRememberChecked(!rememberChecked)}/>
                    <label htmlFor="remember">Remember Me</label>
                </div>
                <button onClick={() => login()}>Login</button>
                    Or login with
                <div className="LoginHelp">
                    <button>Facebook</button>
                    <button>Google</button>
                </div>
                    Not a member? <Link to='/register'>Sign up here</Link>
            </div>
        </div>
    )
}

export default Login;