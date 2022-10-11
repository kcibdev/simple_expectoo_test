import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../services/authService";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, username, password } = formData;
    if (!email || !username || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    //am using a simple method to validate the email address but in a real world application i would use the email-validator package or regex
    if (!email.includes("@")) {
      toast.error("Invalid email address");
      return;
    }

    const register = await authService.registerUser({
      email,
      username,
      password,
    });

    if (!register.success) {
      toast.error(register.message);
      return;
    }

    //User successfully registered
    toast.success(register.message);
    setFormData({
      email: "",
      username: "",
      password: "",
    });
  };
  return (
    <div className="auth login">
      <div className="auth__container">
        <h1 className="auth__header">Register</h1>
        <p className="auth__subheader">Create new account</p>

        <div className="auth__form--body">
          <form action="" className="auth__form">
            <label htmlFor="email">
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="auth__input username"
                onChange={onInputChange}
                value={formData.username}
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="auth__input email"
                onChange={onInputChange}
                value={formData.email}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input password"
                onChange={onInputChange}
                value={formData.password}
              />
            </label>
            <button
              type="submit"
              className="auth__btn submit__btn"
              onClick={onSubmit}
            >
              Register
            </button>
          </form>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <p className="auth__account">
              Already have an account? <span>Login</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
