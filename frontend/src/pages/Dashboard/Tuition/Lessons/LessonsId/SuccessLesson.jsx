import Button from "@components/Button";
import CheckSvg from "@components/svgr/CheckSvg";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import {
  Navigate,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

const SuccessLesson = () => {
  const { id } = useParams();
  const { isVisited, setCourses } = useOutletContext();
  const navigate = useNavigate();
  if (!isVisited) return <Navigate to=".." relative />;
  const handleClickButton = () => {
    navigate(`/dashboard/courses/${id}`);
  };

  useEffect(() => {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== +id)
    );
  }, []);
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="success"
    >
      <div className="success-container">
        <div className="success__img-container">
          <CheckSvg
            initial={{
              scale: 0.5,
              filter: "drop-shadow(rgb(44, 51, 51, 0) 2px 3px 1px)",
            }}
            whileHover={{ rotate: 345 }}
            animate={{
              scale: 1,
              rotate: 360,
              filter: "drop-shadow(rgb(44, 51, 51, .5) 2px 3px 1px)",
            }}
            exit={{
              scale: 0.5,
              filter: "drop-shadow(rgb(44, 51, 51, 0) 2px 3px 1px)",
            }}
            color="#2C3333"
            className="success__img"
          />
        </div>
        <h2 className="success__title">Matricula completada</h2>
        <Button onClick={handleClickButton} modifiers={["dark", "success"]}>
          Ir al curso <BsFillJournalBookmarkFill size={18} />
        </Button>
      </div>
    </motion.article>
  );
};

export default SuccessLesson;
