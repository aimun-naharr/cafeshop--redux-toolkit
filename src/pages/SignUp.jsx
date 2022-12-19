import React from "react";
import { useState } from "react";
import {  Link } from "react-router-dom";
const initialState={
 firstName: '',
 lastName:'',
 email: '',
 password: '',
confirmPassword: ''
}
const SignUp = () => {
 const [formData, setFormData]=useState(initialState)
 const handleChange=(e)=>{
  setFormData({...formData, [e.target.name]: e.target.value})
 }
 console.log(formData)
 const handleSubmit=(e)=>{
e.preventDefault()
console.log(e.target.value);
 }
        return (
                <div>
                        <form action="" onClick={handleSubmit}>
                                
                                <input type="text" name="firstName"  placeholder="First Name"  onBlur={handleChange}/>
                                <input type="text" name="lastName"  placeholder="Last Name"  onBlur={handleChange}/>
                                <input type="email" name="email" placeholder="Email" onBlur={handleChange} />
                                <br />
                                <input type="password" name="password" placeholder="Password"  onBlur={handleChange}/>
                                <input type="password" name="confirmPassword" placeholder="Confirm password" onBlur={handleChange}/>
                                <p>
                                        Already have an account? <Link to="/login">Please login</Link>
                                </p>
                                <input type="submit" value="Sign up" />
                        </form>
                </div>
        );
};

export default SignUp;
