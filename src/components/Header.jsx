import logo from "../images/logo.svg";

export default function Header() {
  return(
    <header className="header page__header">
      <a href="/#" className="header__logo-link">
        <img src={logo} alt="логотип" className="header__logo" />
      </a>
    </header>
  );
}
