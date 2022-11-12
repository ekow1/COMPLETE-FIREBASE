import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { useSelector } from "react-redux";
import googleIcon from "../assets/Google__G__Logo.svg.png";

function Register() {
  const users = useSelector((state) => {
    return state.AuthReducer.users;
  });
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  useEffect(() => {
    if (users) {
      navigate("/");
    }
  }, [users, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailMsg("");
    setPasswordMsg("");
    if (!email) {
      setEmailMsg("Email is required");
    }
    if (!password) {
      setPasswordMsg("Password is required");
    } else if (!password) {
      setPasswordMsg("Password has to be at least 6 characters");
    }
    try {
      createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    setPassword("");
  };

  const authenticateWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form className="form">
        <h1 className="mb-5">Register Page </h1>
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="alert">{emailMsg ? <p>{emailMsg}</p> : ""}</div>
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="alert">{passwordMsg ? <p>{passwordMsg}</p> : ""}</div>
        <div className="btns">
          <button type="submit" onClick={handleSubmit}>
            Create Account
          </button>
          <button type="submit" onClick={authenticateWithGoogle}>
            <img src={googleIcon} alt="" />
            Sign in with Google
          </button>
        </div>
        <h6>
          Already have an account? <Link to="/login" className="text-success">Login</Link>
        </h6>
      </form>
    </div>
  );
}

export default Register;
