import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

function Register() {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        major: '',
        birthDate: '',
        role: '',
        email: '',
        password: '',
        confirmPwd: ''
    });

    const handleChange = (e) => {
        setData(values => ({...values, [e.target.name]: e.target.value}));
    }

    const submitForm = (e) => {
        e.preventDefault()

        console.log(data)

        axios.post("http://localhost/react-backend/register.php", data)
            .then(function (response) {
                console.log("Succesfully sent, Response:: ", response);
            })
            .catch(function (error) {
                console.log("Error:", error);
            });
    }

    return (
        <main>
            <section id="signup-page">
                <form className="signup-form" onSubmit={submitForm} method="POST">
                    <h3>Create Account</h3>
                    <div className="form-body">
                        <div className="row">
                            <div className="input-group">
                                <label>First name</label>
                                <input type="text" name="firstName" placeholder="First Name" defaultValue={""}
                                       value={data.firstName}
                                       onChange={handleChange} required/>
                            </div>
                            <div className="input-group">
                                <label>Last name</label>
                                <input type="text" name="lastName" placeholder="Last Name" defaultValue={""}
                                       value={data.lastName}
                                       onChange={handleChange} required/>
                            </div>
                            <div className="input-group">
                                <label>Address</label>
                                <textarea id="address" name="address" placeholder="Enter Your Address"
                                          style={{height: 200}} required defaultValue={""} value={data.address}
                                          onChange={handleChange}/>
                            </div>
                            <div className="input-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" placeholder="Enter your Phone No." required
                                       defaultValue={""}
                                       onChange={handleChange} value={data.phone}/>
                            </div>
                            <div className="input-group">
                                <label>Major</label>
                                <input type="text" name="major" placeholder="Enter your Major" defaultValue={""}
                                       value={data.major}
                                       onChange={handleChange} required/>
                            </div>
                            <div className="input-group">
                                <label>Date of Birth</label>
                                <input type="date" name="birthDate" placeholder="Enter your birth date"
                                       value={data.birthDate} defaultValue={""}
                                       onChange={handleChange} required/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="roles">User Type</label>
                                <select name="roles" id="role" onChange={handleChange} value={data.role}>
                                    <option value="business">Business Owner</option>
                                    <option value="student" selected>Student</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Enter your email address"
                                       defaultValue={""} value={data.email}
                                       onChange={handleChange} required/>
                            </div>
                            <div className="input-group">
                                <label>Password </label>
                                <input type="password" name="password" placeholder="Enter your password"
                                       defaultValue={""} value={data.password}
                                       required onChange={handleChange}/>
                            </div>
                            <div className="input-group">
                                <label>Confirm Password</label>
                                <input type="password" name="confirmPwd" placeholder="Confirm your password"
                                       defaultValue={""} value={data.confirmPwd}
                                       required onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-footer">
                        <button className="styled-btn-2" type="submit" name="signupBtn">Sign Up</button>
                        <NavLink to="/login" className="styled-btn-2" type="submit" name="LoginBtn">Sign In
                            instead</NavLink>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Register