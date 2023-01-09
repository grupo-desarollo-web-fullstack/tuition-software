import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard, { loaderDashboard } from "@pages/Dashboard";
import Courses, { loaderCourses } from "@pages/Dashboard/Courses";
import Tuition, { loaderTuition } from "@pages/Dashboard/Tuition";
import Login, { actionLogin } from "@pages/Auth/Login";
import Register, { actionRegister } from "@pages/Auth/Register";
import Auth, { loaderAuth } from "@pages/Auth";
import Layout, { loaderLayout } from "@layouts/Layout";
import Home from "@pages/Home";
import About from "@pages/About";
import { loaderLogout } from "@pages/Logout";
import Lessons from "@pages/Dashboard/Tuition/Lessons";
import LessonsId, {
  actionLessonsId,
  loaderLessonsId,
} from "@pages/Dashboard/Tuition/Lessons/LessonsId";
import ErrorLessons from "@components/errors/ErrorLessons";
import SuccessLesson from "@pages/Dashboard/Tuition/Lessons/LessonsId/SuccessLesson";
import LessonsIdIndex from "@pages/Dashboard/Tuition/Lessons/LessonsId/LessonsIdIndex";
import LessonsIndex from "@pages/Dashboard/Tuition/Lessons/LessonsIndex";
import CourseId, {
  actionCourseId,
  loaderCourseId,
} from "@pages/Dashboard/Courses/Course/CourseId";

const App = () => {
  const routerBrowser = createBrowserRouter(
    createRoutesFromElements(
      <Route loader={loaderLayout} path="/" element={<Layout />}>
        <Route index element={<Home />} />
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
          <Route path="courses" element={<Courses />} loader={loaderCourses}>
            <Route
              loader={loaderCourseId}
              action={actionCourseId}
              path=":id"
              element={<CourseId />}
            />
          </Route>
          <Route path="tuition" element={<Tuition />} loader={loaderTuition}>
            <Route path="lessons" element={<Lessons />}>
              <Route index element={<LessonsIndex />} />
              <Route
                path=":id"
                element={<LessonsId />}
                loader={loaderLessonsId}
                action={actionLessonsId}
                errorElement={<ErrorLessons />}
              >
                <Route index element={<LessonsIdIndex />} />
                <Route path="success" element={<SuccessLesson />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="services">
          <Route path="logout" loader={loaderLogout} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={routerBrowser} />;
};

export default App;
