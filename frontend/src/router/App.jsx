import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Dashboard/Courses";
import Tuition from "../pages/Dashboard/Tuition";
import Login, { actionLogin } from "../pages/Auth/Login";
import Register, { actionRegister } from "../pages/Auth/Register";
import Auth from "../pages/Auth";
import Layout from "../layouts/Layout";

const App = () => {
  const routerBrowser = createBrowserRouter(
    createRoutesFromElements(
      <Route path="*" element={<Layout />}>
        <Route path="auth" element={<Auth />}>
          <Route
            action={actionRegister}
            path="register"
            element={<Register />}
          />
          <Route action={actionLogin} path="login" element={<Login />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="courses" element={<Courses />} />
          <Route path="tuition" element={<Tuition />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={routerBrowser} />;
};

export default App;
