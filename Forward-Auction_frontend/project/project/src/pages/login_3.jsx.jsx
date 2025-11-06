import React from "react";
import "./index1.css";
import logo from "./assets/logo.png";
import corner from "./assets/corner.png";
import { FaGoogle } from "react-icons/fa";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";


const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID"; // TODO: Replace with your Google OAuth Client ID

const Login = ({ onLoginSuccess }) => {
  const handleLogin = () => {
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    // You can send credentialResponse.credential to your backend for verification
    if (onLoginSuccess) {
      onLoginSuccess(credentialResponse);
    }
  };

  const handleGoogleError = () => {
    alert("Google Sign In was unsuccessful. Try again later");
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="login-page">
        {/* Title placed at the top inside login-page */}
        <h1 className="page-title">JAI OBJECT DETECTION AND IDENTIFICATION SYSTEM</h1>
        <br></br>
        <img src={corner} alt="corner design" className="corner-img" />
        <img src={logo} alt="Jindal Logo" className="logo-img" />

        <div className="login-box">
          <h2>Sign in</h2>

          <input
            type="text"
            placeholder="Username"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />

          <div className="divider">
            <span>Or Login as Guest</span>
          </div>

          <div className="google-btn">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              width="100%"
              text="continue_with"
              shape="pill"
              logo_alignment="left"
            />
          </div>

          <button className="login-btn" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;