import React, {useState, useContext} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {useNavigate} from "react-router-dom";
import {UserContext} from "../AppContext/UserContext";
import axios from 'axios'

function ChangePassword() {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const [otp, setOtp] = useState('')
    const { value, setValue } = useContext(UserContext)
    const navigate = useNavigate()
    const userData = useContext(UserContext)

    console.log(value)

    const updatePassword = async(e) => {
        e.preventDefault()
        let config = {method:"POST",email:userData.value.email,password:password, otp:otp}

         
    try {
        const { data } = await axios
          //.post('http://localhost/react-backend/changepassword.php', config)
          .post('http://localhost/mavmart-backend/changepassword.php', config)
          .then((response) => {
            setValue(null)
            navigate("/login")
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
                <form className="forgot-password-form" action="#" method="post" onSubmit={updatePassword}>
                    <h3>Change Password</h3>
                    <div className="forgot-password-div">
                        <div className="column">
                        <div className="input-group">
                                <label><i className="fa-solid fa-envelope"/>OTP</label>
                                <input type="password" name="otp" placeholder="Otp"
                                       onChange={(e) => setOtp(e.target.value)} required/>
                            </div>
                            <div className="input-group">
                                <label><i className="fa-solid fa-envelope"/>New Password</label>
                                <input type="password" name="password" placeholder="New password"
                                       onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                            <div className="input-group">
                                <label><i className="fa-solid fa-envelope"/>Confirm Password</label>
                                <input type="password" name="confirmPassword" placeholder="Confirm password"
                                       onChange={(e) => setPassword(e.target.value)} required/>
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

export default ChangePassword