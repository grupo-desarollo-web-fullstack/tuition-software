import config from "@config/index";
import serialize from "@utils/serialize";

const getCourseFromMatricula = async ({ tbl_curso_curso_id: cursoId }) => {
  const { baseUrlBackend } = config;
  const headers = new Headers();
  headers.set("Content-Type", "application/json; charset=utf-8");
  const response = await fetch(`${baseUrlBackend}/curso/${cursoId}`, {
    method: "GET",
    headers,
  });
  const { data: course } = await response.json();
  return serialize(course, "curso");
};

const getCourses = async (options = {}) => {
  const { baseUrlBackend } = config;
  let courses = [];
  if (options.matriculas) {
    const { matriculas } = options;
    courses = await Promise.all(matriculas.map(getCourseFromMatricula));
  } else {
    const headers = new Headers();
    headers.set("Content-Type", "application/json; charset=utf-8");
    const response = await fetch(`${baseUrlBackend}/curso/`, {
      method: "GET",
      headers,
    });
    const { data } = await response.json();
    courses = data;
  }
  return courses.map((course) => serialize(course, "curso"));
};

export default getCourses;