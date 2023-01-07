// import useMatchMeasure from "@hooks/useMatchMeasure";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useOutlet, useOutletContext } from "react-router-dom";

const LessonsSelectUser = ({ lessons }) => {
  const { setCourses } = useOutletContext();
  const [lessonSelected, setLessonSelected] = useState(null);
  const [isVisited, setIsVisited] = useState(false);
  const outlet = useOutlet({
    lessonSelected,
    setLessonSelected,
    setIsVisited,
    isVisited,
    lessons,
    setCourses,
  });
  return <AnimatePresence>{outlet}</AnimatePresence>;
};

export default LessonsSelectUser;
