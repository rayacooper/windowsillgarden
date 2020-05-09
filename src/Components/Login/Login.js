import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Login.css'

const Login = () => {

    let [rememberChecked, updateRememberChecked] = useState(true)

    const login = () => {
        console.log("Login dangit")
        console.log(rememberChecked)
    }

    return(
        <div className="LoginMain">
            <div className='LoginBox'>
                <h1>Login</h1>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password" />
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