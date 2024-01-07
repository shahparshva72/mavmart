import React, {useState, useContext} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {useNavigate} from "react-router-dom";
import {UserContext} from "../AppContext/UserContext";
import axios from 'axios'

function ForgotPassword() {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const userData = useContext(UserContext)
    const navigate = useNavigate()

    console.log(userData)

    const submitRequest = async (e) => {
        e.preventDefault()
        let config = {method:"POST",email:email}
        
        //navigate('/dashboard')
        try {
          const { data } = await axios
            .post('http://localhost/mavmart-backend/forgotpassword.php', config)
            //.post('http://localhost/react-backend/forgotpassword.php', config)
            .then((response) => {
              //console.log(response.data)
              navigate('/changepassword')
            })
            .catch((error) => {
              console.log(error)
            })
        } catch (error) {
          setTimeout(() => {
            setError('Invalid credentials...')
          }, 10)
        }
      }

    return (
        <>
            <section id="forgot-password-page">
                <form className="forgot-password-form" action="#" method="post" onSubmit={submitRequest}>
                    <h3>Forgot Password</h3>
                    <div className="forgot-password-div">
                        <div className="column">
                            <div className="input-group">
                                <label><i className="fa-solid fa-envelope"/>Verify E-mail</label>
                                <input type="email" name="email" placeholder="Please enter your E-mail ID"
                                       onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                        </div>
                    </div>
                    <div className="form-footer">
                        <input className="styled-btn-1" type="submit" defaultValue="Submit"/>
                    </div>
                </form>
            </section>
            
        </>
    )
}

export default ForgotPassword