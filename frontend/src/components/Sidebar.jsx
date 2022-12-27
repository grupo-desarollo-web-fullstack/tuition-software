import { Link, NavLink } from "react-router-dom";
import { FaSwatchbook } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { IoMdDocument } from "react-icons/io";
import "@styles/modules/sidebar.scss";
import Menu from "./Menu";
import getGravatar from "@utils/getGravatar";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Button from "./Button";
import { useEffect, useRef } from "react";

const clearClasses = ([refAvatar, refTitle, refMenu, refButton], modifier) => {
  refAvatar.current.classList.remove(`sidebar__avatar--${modifier}`);
  refTitle.current.classList.remove(`sidebar__title--${modifier}`);
  refMenu.current.classList.remove(`menu--sidebar-${modifier}`);
  refButton.current.classList.remove(`button--sidebar-${modifier}`);
};
/**
 *
 * @param {{
 *  user: import('@hooks/auth/useUser').User
 * }} props
 */
const Sidebar = ({ user }) => {
  const refAvatar = useRef();
  const refTitle = useRef();
  const refMenu = useRef();
  const refButton = useRef();
  const modifier = useRef(innerWidth > 624 ? "minimized" : "expand");
  const gravatar = getGravatar(user.email);
  const handleClickButton = () => {
    refAvatar.current.classList.toggle(`sidebar__avatar--${modifier.current}`);
    refTitle.current.classList.toggle(`sidebar__title--${modifier.current}`);
    refMenu.current.classList.toggle(`menu--sidebar-${modifier.current}`);
    refButton.current.classList.toggle(`button--sidebar-${modifier.current}`);
  };
  const handleTransitionEnd = (e) => {
    if (
      e.target.nodeName !== "IMG" &&
      !refTitle.current.classList.contains("sidebar__title--hidden") &&
      !refTitle.current.classList.contains("sidebar__title--expand")
    ) {
      refTitle.current.classList.add("sidebar__title--hidden");
      return;
    }
    if (e.target.nodeName === "IMG") {
      refTitle.current.classList.remove("sidebar__title--hidden");
    }
  };
  useEffect(() => {
    const handleResizeWindow = () => {
      if (innerWidth < 624) {
        if (modifier.current === "minimized") {
          refTitle.current.classList.remove("sidebar__title--hidden");
          clearClasses([refAvatar, refTitle, refMenu, refButton], "minimized");
          modifier.current = "expand";
        }
      } else {
        refTitle.current.classList.remove("sidebar__title--hidden");
        clearClasses([refAvatar, refTitle, refMenu, refButton], "expand");
        modifier.current = "minimized";
      }
    };
    addEventListener("resize", handleResizeWindow);
    return () => removeEventListener("resize", handleResizeWindow);
  }, []);
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <section className="sidebar__user">
          <div className="sidebar__user-container">
            <Button
              ref={refButton}
              isSound={false}
              onClick={handleClickButton}
              modifiers="sidebar"
            >
              <BsFillArrowLeftCircleFill size={18} color="#f5f2e7" />
            </Button>
            <img
              onTransitionEnd={handleTransitionEnd}
              ref={refAvatar}
              className="sidebar__avatar"
              src={gravatar}
              alt={`Foto de perfil de ${user.nombre}`}
            />
            <h2
              ref={refTitle}
              onTransitionEnd={handleTransitionEnd}
              className="sidebar__title"
            >
              {user.nombre}
            </h2>
          </div>
        </section>
        <Menu suscribe={false} ref={refMenu} className="menu--sidebar">
          <li className="menu__item menu__item--sidebar">
            <NavLink className="menu__link menu__link--sidebar" to="./courses">
              <FaSwatchbook />
            </NavLink>
          </li>
          <li className="menu__item menu__item--sidebar">
            <NavLink className="menu__link menu__link--sidebar" to="./tuition">
              <IoMdDocument />
            </NavLink>
          </li>
          <li className="menu__item menu__item--sidebar">
            <Link
              to="/services/logout"
              className="menu__link menu__link--sidebar"
            >
              <BiLogOut />
            </Link>
          </li>
        </Menu>
      </div>
    </aside>
  );
};

export default Sidebar;
