import React from "react";
import { NavLink } from "react-router-dom";
import useUser from "@hooks/auth/useUser";

const Menu = React.forwardRef(({ handleClickClose }, menuRef) => {
  const [user] = useUser();
  return (
    <ul ref={menuRef} className="menu">
      <li>
        <NavLink
          onClick={handleClickClose}
          className={({ isActive }) =>
            isActive ? "menu__link menu__link--active" : "menu__link"
          }
          to={user ? "/dashboard" : "/auth/login"}
        >
          {user ? "Dashboard" : "Iniciar sesión"}
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={handleClickClose}
          className={({ isActive }) =>
            isActive ? "menu__link menu__link--active" : "menu__link"
          }
          to="/about"
        >
          Nosotros
        </NavLink>
      </li>
    </ul>
  );
});

export default Menu;
