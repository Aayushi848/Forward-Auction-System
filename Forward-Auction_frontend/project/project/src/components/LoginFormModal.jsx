import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jspllogo from "../assets/icons/jspllogo.png";
import "./LoginFormModal.css";
const credentials = {
  admin: "admin123",
  user: "Aayushi",
  manager: "Suresh Sahoo",
};

const LoginFormModal = ({ onClose, setIsAuthenticated }) => {
  const [email, setEmail] = useState("user@jindalsteel.com");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === credentials[role]) {
      setIsAuthenticated(true);
      setError("");
      alert(`Logged in as ${role}`);
      navigate("/dashboard");
      onClose(); // Close modal after successful login
    } else {
      setError("Wrong password for this role");
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-box">
        <button
          onClick={onClose}
          className="close-button"
        >
          &times;
        </button>

        <img
          src={jspllogo}
          alt="JSPL Logo"
          className="modal-logo"
        />
        <h2 className="modal-title">Sign in</h2>

        <form onSubmit={handleSubmit}>
          <label className="modal-label">Email</label>
          <input
            type="email"
            className="modal-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="modal-label">Role</label>
          <select
            className="modal-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {Object.keys(credentials).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>

          <label className="modal-label">Password</label>
          <input
            type="password"
            className="modal-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="modal-error">{error}</p>}

          <button
            type="submit"
            className="modal-submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormModal;
