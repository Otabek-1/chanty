import React, { useState } from "react";
import "./styles/auth.css";
import "./fontawesome-free-5.15.4-web/css/all.min.css"

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login to Chanly" : "Create an Account"}</h2>
        <form>
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="input-field" />
          )}
          <input type="email" placeholder="Email" className="input-field" />
          <div className="password-field">
          <input type={passwordShow ? "text" : "password"} placeholder="Password" className="input-field" />
          <i className={!passwordShow ? "fas fa-eye-slash" : "fas fa-eye"} onClick={() => setPasswordShow(!passwordShow)}></i>
          </div>
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
