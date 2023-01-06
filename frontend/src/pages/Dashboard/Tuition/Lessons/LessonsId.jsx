import { redirect, useLoaderData } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import getLessons from "@libs/db/get/getLessons";
import LessonsSelectUser from "@components/Lessons/LessonsSelectUser";
import config from "@config/index";
import createTuitions from "@libs/db/create/createTuitions";

export const loaderLessonsId = async ({ params }) => {
  const lessons = await getLessons(params.id, {
    sort: "schedule",
  });

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
      {lessons?.length ? (
        <LessonsSelectUser lessons={lessons} />
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="tuition__lessons__paragraph"
        >
          Lo sentimos, no hay clases disponibles para este curso por el momento.
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default LessonsId;
