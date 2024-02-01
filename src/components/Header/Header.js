import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/1.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link className="header__title-link" to="/">
            {/* <h1 className="header__title">Dear Diary...</h1> */}
            <img className="header__logo" src={logo} alt="logo" />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
