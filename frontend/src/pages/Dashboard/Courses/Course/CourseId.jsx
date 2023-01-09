import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import config from "@config/index";
import getCourse from "@libs/db/get/getCourse";
import { redirect, useLoaderData } from "react-router-dom";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import useDaysMonthFromNameDay, {
  spanishLocale,
} from "@hooks/useDaysMonthFromNameDay";
import { BsStopwatch } from "react-icons/bs";
import { IoIosPeople, IoMdSchool } from "react-icons/io";
import deleteTuition from "@libs/db/delete/deleteTuition";
import serialize from "@utils/serialize";
import FormDelete from "@components/FormDelete";
import { motion } from "framer-motion";

export const loaderCourseId = async ({ params }) => {
  const { id } = params;
  const token = localStorage.getItem(config.tokenTuitionSoftware);
  const course = await getCourse(token, id, {
    filterByUser: true,
    action: "some",
  });
  if (course.Clase.length <= 0) return redirect("..");
  return course;
};

export const actionCourseId = async ({ request }) => {
  const urlParsed = new URL(request.url);
  const formData = await request.formData();
  const textOriginal = urlParsed.searchParams.get("textConfirm");
  const confirmText = formData.get("confirm");
  if (textOriginal === confirmText) {
    const tuitionId = urlParsed.searchParams.get("tuitionId");
    const token = localStorage.getItem(config.tokenTuitionSoftware);
    await deleteTuition(token, tuitionId);
    return redirect(`/dashboard/courses`);
  }
  return {
    error: "Escribe la palabra indicada para poder eliminar 😉",
  };
};

const getLocutionHour = (hour) => (hour >= 12 ? "PM" : "AM");
const getHour = (hour) => hour % 12 || 12;

const CourseId = () => {
  const course = useLoaderData();
  const [lesson] = course.Clase;
  const { schedule, Matricula } = lesson;
  const tuition = serialize(Matricula.at(0), "matricula");
  const selectedDays = useDaysMonthFromNameDay(schedule.dias);
  const dates = {
    start: {
      hour: getHour(schedule.date.start.hour),
      locution: getLocutionHour(schedule.date.start.hour),
    },
    end: {
      hour: getHour(schedule.date.end.hour),
      locution: getLocutionHour(schedule.date.end.hour),
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      className="courses__content-container"
    >
      <motion.h2
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="courses__content__title"
      >
        {course.nombre}
      </motion.h2>
      <div className="courses__content__info">
        <div className="courses__content__info__feature-container">
          <article className="courses__content__info__feature courses__content__info__feature--classroom">
            <IoMdSchool size={20} />
            <h4 className="courses__content__info__feature__title">
              Aula: {lesson.nsalon}
            </h4>
          </article>
          <article className="courses__content__info__feature">
            <IoIosPeople size={20} />
            <h4 className="courses__content__info__feature__title">
              Capacidad: {lesson.aforo} estudiantes
            </h4>
          </article>
          <article className="courses__content__info__feature courses__content__info__feature--hour">
            <BsStopwatch />
            <h4 className="courses__content__info__feature__title">
              Horario de clase: {dates.start.hour}:
              {schedule.date.start.minute || "0".repeat(2)}{" "}
              {dates.start.locution} - {dates.end.hour}:
              {schedule.date.end.minute || "0".repeat(2)} {dates.end.locution}{" "}
            </h4>
          </article>
        </div>
        <div className="courses__content__info__calendar-container">
          <p className="courses__content__info__paragraph">
            Días de clases del presente mes:
          </p>
          <Calendar
            colorPrimary="#2666CF"
            value={selectedDays}
            shouldHighlightWeekends
            locale={spanishLocale}
            calendarClassName="courses__content__info__calendar"
          />
        </div>
        <FormDelete tuition={tuition} name={course.nombre} />
      </div>
    </motion.div>
  );
};

export default CourseId;
