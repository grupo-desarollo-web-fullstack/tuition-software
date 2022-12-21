import { Outlet, redirect } from "react-router-dom";
import useLogout from "@hooks/auth/useLogout";
import stateUser from "@libs/states/user";
import config from "@config/index";
import getUser from "@libs/auth/getUser";

export const loaderDashboard = async () => {
  const tokenTuitionSoftware = localStorage.getItem(
    config.tokenTuitionSoftware
  );
  if (tokenTuitionSoftware) {
    const user = await getUser(tokenTuitionSoftware);
    if (!user) {
      localStorage.removeItem(config.tokenTuitionSoftware);
      return redirect("/");
    }
    stateUser.user = user;
  }
  return null;
};

const Dashboard = () => {
  const logout = useLogout("/");
  return (
    <main className="main">
      <button
        style={{
          marginTop: "5rem",
        }}
        onClick={logout}
      >
        Salir
      </button>
      <Outlet />
    </main>
  );
};

export default Dashboard;
