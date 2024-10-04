import React, { useState } from "react";
import style from "./LoginForm.module.css";
import { useLocation, useNavigate } from "react-router";
import { authActions } from "../Store/authSlice";
import { useDispatch } from "react-redux";

const LoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isRemembered, setIsRemembered] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const isInvalid = isTouched && !isValid;
  const navigate = useNavigate();
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const isRememberedHandler = (e) => {
    setIsRemembered(e.target.checked);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (location.pathname === "/auth/login") {
      if (userName === "zyadelbehiry@gmail.com" && password === "123456") {
        dispatch(authActions.adminLogin(userName));
        navigate("/");
        setIsValid(true);
        isRemembered && localStorage.setItem("userName", userName);
      } else if (
        userName === "zyadelbehiry2@gmail.com" &&
        password === "123456"
      ) {
        dispatch(authActions.login(userName));
        navigate("/");
        setIsValid(true);
      }

      setIsTouched(true);
    } else if (location.pathname === "/auth/signup") {
      dispatch(authActions.login(userName));
      navigate("/");
      setIsValid(true);
      setIsTouched(true);
    }
  };
  return (
    <form className={style["login-form"]} onSubmit={submitHandler}>
      {isInvalid && (
        <p className={style["wrong-login"]}>Incorrect username or password!</p>
      )}

      {location.pathname === "/auth/signup" && (
        <div className={style["input-group"]}>
          <label>Name</label>
          <input
            type="text"
            name="text"
            placeholder="Enter Your Name"
            onChange={(event) => userNameChangeHandler(event)}
          />
        </div>
      )}
      <div className={style["input-group"]}>
        <label>User Name</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={(event) => userNameChangeHandler(event)}
        />
      </div>
      <div className={style["input-group"]}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          onChange={(event) => passwordChangeHandler(event)}
        />
      </div>
      {location.pathname === "/auth/signup" && (
        <div className={style["input-group"]}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={(event) => passwordChangeHandler(event)}
          />
        </div>
      )}
      {location.pathname === "/auth/login" && (
        <div className={style["input-remember-me"]}>
          <input
            type="checkbox"
            id="remember-me"
            checked={isRemembered}
            onChange={isRememberedHandler}
          />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
      )}
      <div className={style["input-group"]}>
        <input type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
