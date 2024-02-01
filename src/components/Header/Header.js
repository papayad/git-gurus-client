import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link className="header__title-link" to="/">
            <h1 className="header__title">Dear Diary</h1>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
