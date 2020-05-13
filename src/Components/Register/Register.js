    import React, {useState} from 'react';
    import {Link} from 'react-router-dom';
    import axios from 'axios';
    import './../Login/Login.css';

    const Register = (props) => {

        const register = () => {
            let obj = {userEmail, userPassword, userPasswordRetype}
            if (obj.userPassword === userPasswordRetype){
                axios.get('/ping')
                .then(respone => {
                    if (respone.data === 'Oh, Hello!'){
                        console.log(respone.data)
                        props.history.push('/home')
                    }
                })
            }else{
                alert("Um... passwords don't match friend....")
            }
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