import config from "@config/index";
import getCourses from "@libs/db/getCourses";
import getMatriculas from "@libs/db/getMatricula";
import { useLoaderData } from "react-router-dom";
import "@styles/modules/table.scss";

export const loaderCourses = async () => {
  const token = localStorage.getItem(config.tokenTuitionSoftware);
  const matriculas = await getMatriculas(token, { orderBy: "tbl_curso_curso_id" });
  const courses = await getCourses({ matriculas });
  return courses;
};

const Courses = () => {
  const courses = useLoaderData();
  return (
    <section className="section-table">
      <table className="tabla-desktop">
        <thead>
          <tr>
            <th>CODIGO</th>
            <th>ASIGNATURA</th>
            <th>CREDITOS</th>
            <th>TIPO</th>
            <th>CICLO</th>
          </tr>
        </thead>
        <tbody>
          {courses?.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.nombre}</td>
              <td>{course.creditos}</td>
              <td>{course.tipo}</td>
              <td>{course.ciclo}</td>
            </tr>
          )) }
        </tbody>
      </table>

      <div className="tabla-mobile">
        {courses?.map((course) => (
          <div className="fila" key={course.id}>
            <div className="columna">
              <div className="header-table">CODIGO</div>
              <div className="contenido">{course.id}</div>
            </div>

            <div className="columna">
              <div className="header-table">ASIGNATURA</div>
              <div className="contenido">{course.nombre}</div>
            </div>

            <div className="columna">
              <div className="header-table">CREDITOS</div>
              <div className="contenido">{course.creditos}</div>
            </div>

            <div className="columna">
              <div className="header-table">TIPO</div>
              <div className="contenido">{course.tipo}</div>
            </div>
            <div className="columna">
              <div className="header-table">CICLO</div>
              <div className="contenido">{course.ciclo}</div>
            </div>
          </div>
        )) }
      </div>
    </section>
  );
};

export default Courses;
