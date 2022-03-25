import React, { useState } from "react";

export default function Login({ onLogin }) {

  const [registerData, setRegisterData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = registerData;

  function handleChange(e) {
    const {name, value} = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(registerData);
  }


  return (
    <div className="register page__register">
      <h2 className="register__title">Вход</h2>
      <form name="form_register" className="register__form" onSubmit={handleSubmit}>
        <fieldset className="register__fieldset">
          <label className="register__label">
            <input className="register__input" type="text" placeholder="Email" name="email" minLength="2" maxLength="40" required value={email} onChange={handleChange}></input>
          </label>
          <label className="register__label">
            <input className="register__input" type="password" placeholder="Пароль" name="password" minLength="2" maxLength="40" required value={password} onChange={handleChange}></input>
          </label>
        </fieldset>
        <button type="submit" className="register__button">Войти</button>
      </form>
    </div>
  )
}
