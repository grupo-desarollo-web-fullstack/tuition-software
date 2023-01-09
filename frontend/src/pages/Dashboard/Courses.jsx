import config from "@config/index";
import getCourses from "@libs/db/get/getCourses";
import { Link, NavLink, useLoaderData, useOutlet } from "react-router-dom";
import "@styles/modules/courses.scss";
import Menu from "@components/Menu";
import Course from "@components/Tuition/Course";
import { AnimatePresence, motion } from "framer-motion";
import WarningCourses from "@components/warnings/WarningCourses";

export const loaderCourses = async () => {
  const token = localStorage.getItem(config.tokenTuitionSoftware);
  const courses = await getCourses(token, {
    filterByUser: true,
    action: "some",
  });
  return courses;
};

const NavLinkMotion = motion(NavLink);

const Courses = () => {
  const courses = useLoaderData();
  const outlet = useOutlet();
  return (
    <section className="courses">
      <div className="courses-container">
        <h2 className="courses__title">Tus cursos:</h2>
        {courses.length > 0 && (
          <Menu suscribe={false} className="menu--courses">
            {courses?.map((course) => (
              <NavLinkMotion
                key={course.id}
                className="tuition__courses__link tuition__courses__link--course"
                to={`./${course.id}`}
                state={course}
                relative
              >
                <Course
                  course={course}
                  className="tuition__courses__course--without-drag tuition__courses__course--course"
                />
              </NavLinkMotion>
            ))}
          </Menu>
        )}
        <div className="courses__content">
          <AnimatePresence>
            {courses.length <= 0 ? (
              <WarningCourses
                className="warning--courses"
                error="No tienes cursos agregados"
              >
                <Link className="courses__link" to="/dashboard/tuition">
                  Agrega cursos en /dashboard/tuition
                </Link>
              </WarningCourses>
            ) : (
              outlet || (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="courses__content-container courses__content-container--empty"
                >
                  <h2 className="courses__content__title">
                    Da click a una de tus clases para ver sus detalles 😉
                  </h2>
                  <p className="courses__content__paragraph">
                    Podrás ver los días de clase, el horario, etc de tu clase
                    seleccionada. 📘
                  </p>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Courses;
