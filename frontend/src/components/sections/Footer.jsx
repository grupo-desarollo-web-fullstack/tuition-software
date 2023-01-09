import Menu from "@components/Menu";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <nav className="nav nav--footer">
      <div className="nav-container nav-container--footer">
        <h3 className="nav__copyright">Copyright © Tuition Software 2022</h3>
        <Menu className="menu--footer" suscribe={false}>
          <li className="menu__item">
            <a className="menu__link menu__link--footer" href="#instagram">
              <div className="menu__link__icon menu__link__icon--instagram">
                <span className="menu__link__icon-circle" />
              </div>
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link--footer" href="#facebook">
              <FaFacebook
                className="menu__link__icon"
                title="Facebook"
                color="#4267B2"
                size={30}
              />
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link--footer" href="#twitter">
              <FaTwitter
                className="menu__link__icon"
                title="Twitter"
                color="#1DA1F2"
                size={30}
              />
            </a>
          </li>
        </Menu>
      </div>
    </nav>
  </footer>
);

export default Footer;
