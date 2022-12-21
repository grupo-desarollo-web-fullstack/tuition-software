import { Link } from "react-router-dom";
import { useRef } from "react";
import Logo from "../Logo";
import Menu from "@components/Menu";

const Header = () => {
  const menuRef = useRef();
  const buttonMenuRef = useRef();
  const handleClickToogleMenu = () => {
    menuRef.current.classList.toggle("menu--open");
    buttonMenuRef.current.classList.toggle("menu__icon--close");
  };
  const handleClickClose = () => {
    menuRef.current.classList.remove("menu--open");
    buttonMenuRef.current.classList.remove("menu__icon--close");
  };
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          <Link onClick={handleClickClose} to="/" className="nav__logo">
            <h1 className="nav__logo__title">Tuition Software</h1>
            <Logo width={100} height={100} className="nav__logo__img" />
          </Link>
          <button
            ref={buttonMenuRef}
            onClick={handleClickToogleMenu}
            className="menu__icon"
          >
            <div className="menu__icon__bar"></div>
            <div className="menu__icon__bar"></div>
            <div className="menu__icon__bar"></div>
          </button>
          <Menu ref={menuRef} handleClickClose={handleClickClose} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
