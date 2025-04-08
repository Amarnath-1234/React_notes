import React, { useState } from "react";
import "../components/styles/login.css";

const Input = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="input-field"
  />
);

const Button = ({ children, onClick }) => (
  <button onClick={onClick} className="button">
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="card">{children}</div>
);

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <Card>
          <h2 className="auth-title">
            {isSignUp ? "Create an Account" : "Sign In"}
          </h2>
          <form className="auth-form">
            {isSignUp && <Input type="text" placeholder="Full Name" />}
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>{isSignUp ? "Sign Up" : "Login"}</Button>
          </form>
          <p className="auth-toggle">
            {isSignUp ? "Already have an account?" : "Don't have an account?"} 
            <span 
              className="toggle-link" 
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? " Login here" : " Sign up here"}
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;