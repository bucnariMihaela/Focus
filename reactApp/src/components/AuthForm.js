import { useState, useContext, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import React from "react";
import "./AuthForm.css";
import { MyContext } from "../App";

function AuthForm() {
  const { key, setKey } = useContext(MyContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/login";
    const data = { user_email_address: email, user_password: password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData);

      setKey(responseData.key);
    } catch (error) {
      console.error(error);
    }
  };

  function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (key) {
      navigate("/", { replace: true });
    }
  }, [key]);

  return (
    <Form method="post" className="form">
      <h1 style={{ fontSize: 40 }}>
        {isLogin ? "Loghează-te" : "Creează user nou"}
      </h1>
      <p>
        <label htmlFor="email">Email</label>
        <input
          className="login-container"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={emailChangeHandler}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Parolă</label>
        <input
          className="login-container"
          id="password"
          type="password"
          name="password"
          onChange={passwordChangeHandler}
          value={password}
          required
        />
      </p>
      <div className="form-div">
        <button
          className="button-form"
          onClick={switchAuthHandler}
          type="button"
        >
          {isLogin ? "Creează user nou" : "Loghează-te"}
        </button>
        <button className="button-form" onClick={login}>
          Salvează
        </button>
      </div>
    </Form>
  );
}

export default AuthForm;
