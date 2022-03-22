import { Link } from 'react-router-dom';

export default function Register() {

  return (
    <div className="register page__register">
      <h2 className="register__title">Регистрация</h2>
      <form name="form_register" className="register__form">
        <fieldset className="register__fieldset">
          <label className="register__label">
            <input className="register__input" type="text" placeholder="Email" name="email"></input>
          </label>
          <label className="register__label">
            <input className="register__input" type="password" placeholder="Пароль" name="password"></input>
          </label>
        </fieldset>
        <button type="submit" className="register__button">Зарегистрироваться</button>
      </form>
      <Link to="/sign-in" className="register__link">Уже зарегистрированы? Войти</Link>
    </div>
  )
}
