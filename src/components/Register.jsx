import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register({handleRegister}) {

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
    handleRegister(registerData);
  }

  return (
    <div className="register page__register">
      <h2 className="register__title">Регистрация</h2>
      <form name="form_register" className="register__form" onSubmit={handleSubmit}>
        <fieldset className="register__fieldset">
          <label className="register__label">
            <input className="register__input" type="text" placeholder="Email" name="email" required value={email} onChange={handleChange}></input>
          </label>
          <label className="register__label">
            <input className="register__input" type="password" placeholder="Пароль" name="password" required value={password} onChange={handleChange}></input>
          </label>
        </fieldset>
        <button type="submit" className="register__button">Зарегистрироваться</button>
      </form>
      <Link to="/sign-in" className="register__link">Уже зарегистрированы? Войти</Link>
    </div>
  )
}
