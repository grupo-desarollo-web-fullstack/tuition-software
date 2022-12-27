import { Link, NavLink } from "react-router-dom";
import { FaSwatchbook } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { IoMdDocument } from "react-icons/io";
import "@styles/modules/sidebar.scss";
import Menu from "./Menu";
import getGravatar from "@utils/getGravatar";

/**
 *
 * @param {{
 *  user: import('@hooks/auth/useUser').User
 * }} props
 */
const Sidebar = ({ user }) => {
  const gravatar = getGravatar(user.email);
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <section className="sidebar__user">
          <div className="sidebar__user-container">
            <img
              className="sidebar__avatar"
              width={80}
              height={80}
              src={gravatar}
              alt={`Foto de perfil de ${user.nombre}`}
            />
            <h2 className="sidebar__title">{user.nombre}</h2>
          </div>
        </section>
        <Menu suscribe={false} className="menu--sidebar">
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
