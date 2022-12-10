import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Dashboard/Courses";
import Tuition from "../pages/Dashboard/Tuition";
import Login from "../pages/Login";
import Register from "../pages/Register";

const App = () => {
  const routerBrowser = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="courses" element={<Courses />} />
          <Route path="tuition" element={<Tuition />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={routerBrowser} />;
};

export default App;
