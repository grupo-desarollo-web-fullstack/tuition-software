import Course from "@components/Tuition/Course";
import getCourses from "@libs/db/getCourses";
import { useLoaderData } from "react-router-dom";

export const loaderTuition = async () => {
  const courses = await getCourses();
  return courses;
};

const Tuition = () => {
  const courses = useLoaderData();
  return (
    <section>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </section>
  );
};

export default Tuition;
