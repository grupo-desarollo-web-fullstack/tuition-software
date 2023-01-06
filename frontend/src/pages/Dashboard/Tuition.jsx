import { json, useLoaderData, useOutlet } from "react-router-dom";
import getCourses from "@libs/db/get/getCourses";
import "@styles/modules/tuition.scss";
import CoursesList from "@components/Tuition/CoursesList";
import { AnimatePresence, motion } from "framer-motion";
import config from "@config/index";
import useMatchMeasure from "@hooks/useMatchMeasure";
import { useState } from "react";

export const loaderTuition = async () => {
  const token = localStorage.getItem(config.tokenTuitionSoftware);
  const courses = await getCourses(token, {
    filterByUser: true,
    action: "none",
  });
  return json(courses);
};

const Tuition = () => {
  const isLaptop = useMatchMeasure(1024, "min");
  const coursesFromLoader = useLoaderData();
  const [courses, setCourses] = useState(coursesFromLoader);
  const outlet = useOutlet({
    setCourses,
  });
  return (
    <section aria-hidden="true" className="tuition">
      <div className="tuition-container">
        <div className="tuition__courses">
          <div className="tuition__courses-container">
            <h2 className="tuition__courses__title">Cursos disponibles:</h2>
            <CoursesList
              courses={courses}
              setCourses={setCourses}
              coursesFromLoader={coursesFromLoader}
            />
          </div>
        </div>
        <AnimatePresence>
          {outlet ||
            (isLaptop && (
              <motion.section
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: !isLaptop ? "-50%" : 0,
                  y: !isLaptop ? "-50%" : 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: !isLaptop ? "-50%" : 0,
                  y: !isLaptop ? "-50%" : 0,
                  background: isLaptop
                    ? "rgba(38, 102, 207, 0)"
                    : "rgba(38, 102, 207, 1)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: !isLaptop ? "-50%" : 0,
                  y: !isLaptop ? "-50%" : 0,
                }}
                className="tuition__lessons"
              >
                <div className="tuition__lessons-container">
                  <h2 className="tuition__lessons__title">
                    ¡Escoge un curso! 📚
                  </h2>
                  <p className="tuition__lessons__paragraph">
                    Aquí verás las clases disponibles del curso escogido. 🏫👨‍🎓
                  </p>
                </div>
              </motion.section>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Tuition;
