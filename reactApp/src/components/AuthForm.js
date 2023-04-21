import { useState } from "react";
import { Form } from "react-router-dom";
import React from "react";
import "./AuthForm.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  }

  return (
    <Form method="post" className="form">
      <h1 style={{ fontSize:40 }}>
        {isLogin ? "Loghează-te" : "Creează user nou"}
      </h1>
      <p>
        <label htmlFor="email">Email</label>
        <input
          className="login-container"
          id="email"
          type="email"
          name="email"
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
        <button className="button-form">Salvează</button>
      </div>
    </Form>
  );
}

export default AuthForm;
