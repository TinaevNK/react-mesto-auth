export default function Login() {

  return (
    <div className="register page__register">
      <h2 className="register__title">Вход</h2>
      <form name="form_register" className="register__form">
        <fieldset className="register__fieldset">
          <label className="register__label">
            <input className="register__input" type="text" placeholder="Email" name="email"></input>
          </label>
          <label className="register__label">
            <input className="register__input" type="password" placeholder="Пароль" name="password"></input>
          </label>
        </fieldset>
        <button type="submit" className="register__button">Войти</button>
      </form>
    </div>
  )
}
