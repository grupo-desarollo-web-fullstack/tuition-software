import { forwardRef } from "react";
import useUser from "@hooks/auth/useUser";
import { NavLink } from "react-router-dom";

const Menu = forwardRef(({ className, children, suscribe = true }, menuRef) => {
  const [user] = useUser(suscribe);
  const isFunctionChildren = children instanceof Function;
  return (
    <ul ref={menuRef} className={`menu ${className || ""}`}>
      {isFunctionChildren ? children(user) : children}
    </ul>
  );
});

export const MenuLink = ({ modifier, onClick, to, children }) => {
  return (
    <NavLink
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? `menu__link menu__link--${modifier} menu__link--active`
          : `menu__link menu__link--${modifier}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default Menu;
