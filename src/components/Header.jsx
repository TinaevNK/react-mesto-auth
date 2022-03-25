import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

export default function Header({ loggedIn, email, onSignOut }) {
  const { pathname } = useLocation();

  return(
    <header className="header page__header">
      <Link to="/" className="header__logo-link">
        <img src={logo} alt="логотип" className="header__logo" />
      </Link>
      {loggedIn ? (
          <div className="header__info">
            <p className="header__email">{email}</p>
            <button className="header__button" onClick={onSignOut}>Выйти</button>
          </div>
      ) : (
            <Link className="header__link" to={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
              {pathname === "/sign-in" ? "Регистрация" : "Войти"}
            </Link>
      )}
    </header>
  );
}
