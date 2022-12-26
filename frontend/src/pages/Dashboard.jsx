import { matchPath, Navigate, Outlet, redirect } from "react-router-dom";
import stateUser from "@libs/states/user";
import config from "@config/index";
import getUser from "@libs/auth/getUser";
import Sidebar from "@components/Sidebar";
import useUser from "@hooks/auth/useUser";

export const loaderDashboard = async ({ request }) => {
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
    const matchedPath = matchPath("/dashboard", new URL(request.url).pathname);
    if (matchedPath) return redirect("/dashboard/courses");
    return null;
  }
  return redirect("/");
};

const Dashboard = () => {
  const [user] = useUser();
  if (!user) return <Navigate to="/" />;
  return (
    <main className="main main--dashboard">
      <Sidebar user={user} />
      <Outlet />
    </main>
  );
};

export default Dashboard;
