import { useState,  useContext} from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import jspllogo from "../assets/icons/jspllogo.png";
import bg from "../assets/icons/bg.jpg";
import UserRoleContext from "../UserRoleContext";
import "./Login_2.css"; // ⬅Import the CSS

const Login_2 = ({ setIsAuthenticated }) => {
const { userRole, setUserRole } = useContext(UserRoleContext);

  const [email, setEmail] = useState("user@jindalsteel.com");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const credentials = {
    admin: "admin123",
    user: "user123",
    manager: "manager123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === credentials[role]) {
      setIsAuthenticated(true);
      setError("");
      alert(`Logged in as ${role}`);
      navigate("/dashboard");
    } else {
      setError("Wrong password for this role");
    }
  };

  return (
    <div
      className="login-wrapper"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Top-right Logo */}
      <div className="login-logo">
        <img src={jspllogo} alt="JSPL Logo" className="w-full" />
      </div>

      {/* Login Form */}
      <div className="login-container">
        <h2 className="login-title">Log in</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="login-label">Email</label>
            <input
              type="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/*<div className="mb-4">
            <label className="login-label">Role</label>
            <select
              className="login-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              {Object.keys(credentials).map((roleKey) => (
                <option key={roleKey} value={roleKey}>
                  {roleKey.charAt(0).toUpperCase() + roleKey.slice(1)}
                </option>
              ))}
            </select>
          </div>*/}

          <div className="mb-6">
            <label className="login-label">Password</label>
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}
                    {/* Divider */}
  <div className="login-divider">
    <span>OR</span>
  </div>
          <div className="google-btn">
  
  <GoogleLogin
    onSuccess={async(credentialResponse) => {
      const token = credentialResponse.credential;
      console.log("Google Login Success:", credentialResponse);
      // Handle backend auth here if needed
      const decoded = jwtDecode(token);
console.log(decoded);
// Map specific emails to roles
    const emailRoleMap = {
      "maindalkaraayushi23@gmail.com": "bidder",
      "aayushi.22311861@viit.ac.in": "admin",
      "anuj.singh@jindalsteel.com":"admin",
      "intern-lnod@jindalsteel.com":"bidder",
      // Add more bidder emails as needed
    };
    const role = emailRoleMap[decoded.email] || "unknown";
     localStorage.setItem('userRole', role);
setUserRole(role); 
     console.log('userRole:', role);


      // Send to backend for verification
          try{
            const res = await fetch("http://localhost:5000/api/auth/google", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          });
            const data = await res.json();
          if (data.success) {
            // Store user info if needed
            localStorage.setItem("user", JSON.stringify(data.user));
            alert(`Welcome ${data.user.name}`);
            // Redirect based on role
            if (role === "admin") {
             navigate("/");
            }
             else if (role === "bidder") {
              navigate("/BidderDashboard");
             }
          else {
            alert("unauthorised role");
          }
          } 
          else {
        alert("Google Auth failed");
      }
    } catch (err) {
      console.error("Google login error:", err);
      alert("Something went wrong with Google login.");
    }
        }}
   

    onError={() => {
      alert("Google Sign In failed. Try again. ");
    }}
    width="100%"
    text="continue_with"
    shape="pill"
    logo_alignment="left"
  />
</div>


          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login_2;
