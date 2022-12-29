import config from "@config/index";
import getCourses from "@libs/db/getCourses";
import getMatriculas from "@libs/db/getMatricula";
import { useLoaderData } from "react-router-dom";

export const loaderCourses = async () => {
  const token = localStorage.getItem(config.tokenTuitionSoftware);
  const matriculas = await getMatriculas(token);
  const courses = await getCourses({ matriculas });
  return courses;
};

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <></>
    // <section>
    //   <div className="container text-center">
    //     <div className="row">
    //       {courses?.map((course) => (
    //         <div className="col">
    //         <div className="card" style={{ width: "18rem" }}>
    //           <div className="card-body">
    //               <h5 className="card-title">{course.curso_id}</h5>
    //               <h6 className="card-subtitle mb-2 text-muted">{course.curso_nombre}</h6>
    //             <p className="card-text">
    //                 { course.curso_tipo}
    //             </p>
    //             <a href="#" className="card-link">
    //               Card link
    //             </a>
    //             <a href="#" className="card-link">
    //               Another link
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       )) }
    //     </div>
    //   </div>
    // </section>
  );
};

export default Courses;
