import { Outlet, Link } from "react-router-dom";
import { React, useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {

    const [message, setMessage] = useState('');
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        reset();
      };

    return (
        <div class = "login-body">
            <div class="center">
                <h1>Login</h1>   
                
                <form method="post" action="/adminView">
                    <div class="txt_field">
                        <input
                        name="username" 
                        type="text"
                        placeholder="Username"
                        required/>
                        <span></span>
                        <label>Username</label>
                    </div>

                    <div class="txt_field">
                        <input 
                        name="password"
                        type="password"
                        placeholder="Password"
                        required/>
                        <span></span>
                        <label>Password</label>
                    </div>

                    <div class="pass">Forgot Password?</div>
                        <input
                        name="submit" 
                        type="submit" 
                        value="Login"/>
                        <div class="signup_link">
                        Not a member?  
                        <Link to="/#"> Sign Up </Link>
                        </div>
                </form>
        <Outlet />
        </div>
        </div>
     
    )
  };
  
  export default Login;
