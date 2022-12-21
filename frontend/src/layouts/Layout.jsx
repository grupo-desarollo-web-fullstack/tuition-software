import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "@components/sections/Footer";
import Header from "@components/sections/Header";
import config from "@config/index";
import stateUser from "@libs/states/user";
import getUser from "@libs/auth/getUser";
import "@styles/modules/layout.scss";
import "@styles/modules/menu.scss";

export const loaderLayout = async () => {
  const tokenTuitionSoftware = localStorage.getItem(
    config.tokenTuitionSoftware
  );
  if (tokenTuitionSoftware) {
    const user = await getUser(tokenTuitionSoftware);
    if (!user) {
      localStorage.removeItem(config.tokenTuitionSoftware);
    } else {
      stateUser.user = user;
    }
  }
  return null;
};

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
