import React from "react";
import {  Link } from "react-router-dom";
const initialState={
 email: '',
 password: ''
}
const Login = () => {
        return (
                <div>
                        <form action="">
                                <input type="email" name="email" id="" placeholder="Email"/><br />
                                <input type="email" name="password" id="" placeholder="Password"/>
                                <p>Already have an account? <Link to='/sign-up'>Please signup</Link></p>
                                <input type="submit" value="Login" />
                        </form>
                </div>
        );
};

export default Login;
