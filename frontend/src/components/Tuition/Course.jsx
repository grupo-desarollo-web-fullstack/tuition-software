import Menu from "@components/Menu";
import useUser from "@hooks/auth/useUser";

/**
 * @param {{
 * course: import('@libs/db/get/getCourses').Course
 * }} params
 * @returns
 */
const Course = ({ course, className }) => {
  const [user] = useUser();
  const type = user.ciclo === course.ciclo ? course.tipo : "opcional";
  return (
    <article
      className={`tuition__courses__course ${className || ""}`.trimEnd()}
    >
      <div className="tuition__courses__course-container">
        <span className="tuition__courses__course__id">{course.id}</span>
        <h2 className="tuition__courses__course__title">{course.nombre}</h2>
        <Menu className="menu--course-extra-info">
          <li className="menu__iten menu__item--course-extra-info">
            Ciclo: {course.ciclo}
          </li>
          <li className="menu__iten menu__item--course-extra-info">
            Creditos: {course.creditos}
          </li>
          <li className="menu__iten menu__item--course-extra-info">
            Tipo: {type}
          </li>
        </Menu>
      </div>
    </article>
  );
};

export default Course;
