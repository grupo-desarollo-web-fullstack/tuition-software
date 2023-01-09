import { redirect, useLoaderData } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import getLessons from "@libs/db/get/getLessons";
import LessonsSelectUser from "@components/Lessons/LessonsSelectUser";
import config from "@config/index";
import createTuitions from "@libs/db/create/createTuitions";
import getCourse from "@libs/db/get/getCourse";

export const loaderLessonsId = async ({ params, request }) => {
  const urlParsed = new URL(request.url);
  if (urlParsed.pathname.split("/").at(-1) === "success")
    return {
      success: true,
    };

  const token = localStorage.getItem(config.tokenTuitionSoftware);
  const course = await getCourse(token, params.id, {
    filterByUser: true,
    action: "none",
  });
  const lessons = await getLessons(params.id, {
    orderByRelation: ["tbl_horario_horario", "horario_hora"],
  });
  if (course.Clase.length < lessons.length)
    return redirect("/dashboard/tuition/");

  return lessons;
};

export const actionLessonsId = async ({ request, params }) => {
  const { id } = params;
  const urlParsed = new URL(request.url);
  const lessonId = urlParsed.searchParams.get("lesson");
  const baseUrl = `/dashboard/tuition/lessons/${id}`;
  if (lessonId === "undefined")
    throw Error(
      "No seleccionaste ninguna clase disponible, vuelve a intentar ✨"
    );

  const token = localStorage.getItem(config.tokenTuitionSoftware);
  await createTuitions(token, lessonId);

  return redirect(`${baseUrl}/success`);
};

const LessonsId = () => {
  const lessons = useLoaderData();
  return (
    <AnimatePresence>
      {lessons?.length || lessons.success ? (
        <LessonsSelectUser lessons={lessons} />
      ) : (
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="tuition__lessons__not-found"
        >
          <h2 className="tuition__lessons__title">
            Ninguna clase disponible 😢
          </h2>
          <p className="tuition__lessons__paragraph">
            Lo sentimos, no hay clases disponibles para este curso por el
            momento.
          </p>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default LessonsId;
