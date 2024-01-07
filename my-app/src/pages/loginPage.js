import React, {useContext, useState} from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../AppContext/UserContext";

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    // const value = useContext(UserContext)
    // console.log(value)
    const {value, setValue} = useContext(UserContext);
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        let config = {method: 'POST', email: email, password: password}

        console.log(config)
        try {
            await
                axios
                    .post("http://localhost/mavmart-backend/login.php", config)
                    .then(r => {
                        console.log(r.data)
                        setLoggedIn(true)
                        if (Object.keys(r.data.userData).length > 0) {
                            console.log("HERERE")
                            let obj = r.data.userData
                            obj = {...obj, isLogged: isLoggedIn}
                            setValue(obj)
                            if(obj.role === "student") {
                                navigate("/student/dashboard")

                            } else if(obj.role === "business") {
                                navigate("/business/dashboard")

                            } else if(obj.role === "admin") {
                                navigate("/admin/dashboard")
                                
                            } else if(obj.role === "superadmin") {
                                navigate("/superadmin/dashboard")

                            }
                            
                        }
                    })
                    // .catch((error) => {
                    //     console.log('no authorization', error)
                    // })
        } catch (e) {
            setTimeout(() => {
                setError('Incorrect Email or Password')
            }, 10)
        }
    }
    return (
        <>
            <main>
                <section id="login-page">
                    <form className="login-form" method="POST" onSubmit={handleSubmit}>
                        <div className="form-body">
                            <div className="column">
                                <div className="styled-login-form">
                                    <div className="input-group">
                                        <input type="email" name="email" placeholder="Email" value={email}
                                               onChange={(e) => setEmail(e.target.value)} required/>
                                    </div>
                                    <div className="input-group">
                                        <input type="password" name="password" placeholder="Password" value={password}
                                               onChange={(e) => setPassword(e.target.value)} required/>
                                    </div>
                                    <div className="row">
                                        <div className="input-group">
                                            <NavLink to="/register" className="styled-btn-1">Register</NavLink>
                                        </div>
                                        <div className="input-group">
                                            <button type='submit' className="styled-btn-1">Sign In</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-footer">
                                    <div className="input-group">
                                        <NavLink to="/forgotpassword" className="button-primary">Forgot
                                            Password</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default LoginPage