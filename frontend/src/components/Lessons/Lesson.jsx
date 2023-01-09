import { AnimatePresence, motion } from "framer-motion";
import { FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { MdDateRange, MdReduceCapacity } from "react-icons/md";
import { useEffect, useRef, useState, useTransition } from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";
import LoaderLesson from "@components/loaders/LoaderLesson";

const Lesson = ({ lesson, setLessonSelected, lessonSelected }) => {
  const [loading, startTransition] = useTransition();
  const [isSelected, setSelected] = useState(false);
  const { schedule } = lesson;
  const { teacher, date, dias } = schedule;
  const refArticle = useRef();
  const hour = date.hour % 12 || 12;
  const locutionHour = date.hour >= 12 ? "PM" : "AM";
  const handleClickToogleSelect = () => {
    const newIsSelected = !isSelected;
    startTransition(() => {
      setSelected(newIsSelected);
      setLessonSelected(newIsSelected ? lesson : null);
    });
  };
  useEffect(() => {
    if (lessonSelected?.id !== lesson.id) setSelected(false);
  }, [lessonSelected]);
  useEffect(
    () => () => {
      setLessonSelected(null);
    },
    []
  );
  return (
    <motion.article
      ref={refArticle}
      onClick={handleClickToogleSelect}
      className="lesson"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        backgroundColor: isSelected ? "#2c3333" : "#f5f2e7",
        color: isSelected ? "#f5f2e7" : "#2c3333",
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <div className="lesson-container">
        <AnimatePresence>
          {isSelected && (
            <motion.div
              className="lesson__selected"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
              }}
            >
              <BsBookmarkCheckFill size={20} color="#71c0c0" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="lesson__section lesson__section--room">
          <FaSchool size={15} />
          <h3 className="lesson__section__title">{lesson.nsalon}</h3>
        </div>
        <div className="lesson__section lesson__section--capacity">
          <MdReduceCapacity size={15} />
          <h3 className="lesson__section__title">{schedule.aforo}</h3>
        </div>
        <div className="lesson__section lesson__section--teacher">
          <FaChalkboardTeacher size={15} />
          <h3 className="lesson__section__title">{teacher.nombre}</h3>
        </div>
        <div className="lesson__section lesson__section--teacher">
          <MdDateRange size={15} />
          <h3 className="lesson__section__title">
            {dias} - {hour} {locutionHour}
          </h3>
        </div>
        <AnimatePresence>
          {loading && <LoaderLesson className="lesson__spinner" />}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

export default Lesson;
