import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../services/authService";

const Login = () => {
  const [formData, setFormData] = useState({
    emailUsername: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { emailUsername, password } = formData;

    let email;
    let username;

    if (!emailUsername || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    //am using a simple method to validate the email address but in a real world application i would use the email-validator package or regex
    if (emailUsername.includes("@")) {
      email = emailUsername;
    } else {
      username = emailUsername;
    }

    const login = await authService.loginUser({
      email,
      username,
      password,
    });

    if (!login.success) {
      toast.error(login.message);
      return;
    }

    //User successfully registered
    toast.success(login.message);
  };

  return (
    <div className="auth login">
      <div className="auth__container">
        <h1 className="auth__header">Login</h1>
        <p className="auth__subheader">Welcome Back</p>

        <div className="auth__form--body">
          <form action="" className="auth__form">
            <label htmlFor="email">
              <input
                type="text"
                placeholder="Email Or Username"
                name="emailUsername"
                className="auth__input emailUsername"
                onChange={onChangeInput}
                value={formData.emailUsername}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input password"
                onChange={onChangeInput}
                value={formData.password}
              />
            </label>
            <button
              type="submit"
              className="auth__btn submit__btn"
              onClick={onSubmit}
            >
              Login
            </button>
          </form>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <p className="auth__account">
              Don't have an account? <span>Create one</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
