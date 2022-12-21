import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard, { loaderDashboard } from "@pages/Dashboard";
import Courses from "@pages/Dashboard/Courses";
import Tuition from "@pages/Dashboard/Tuition";
import Login, { actionLogin } from "@pages/Auth/Login";
import Register, { actionRegister } from "@pages/Auth/Register";
import Auth, { loaderAuth } from "@pages/Auth";
import Layout, { loaderLayout } from "@layouts/Layout";
import Home from "@pages/Home";
import About from "@pages/About";

const App = () => {
  const routerBrowser = createBrowserRouter(
    createRoutesFromElements(
      <Route loader={loaderLayout} path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route loader={loaderAuth} path="auth" element={<Auth />}>
          <Route
            action={actionRegister}
            path="register"
            element={<Register />}
          />
          <Route action={actionLogin} path="login" element={<Login />} />
        </Route>
        <Route
          loader={loaderDashboard}
          path="dashboard"
          element={<Dashboard />}
        >
          <Route path="courses" element={<Courses />} />
          <Route path="tuition" element={<Tuition />} />
        </Route>
        <Route path="about" element={<About />} />
      </Route>
    )
  );
  return <RouterProvider router={routerBrowser} />;
};

export default App;
