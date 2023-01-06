import { motion } from "framer-motion";
import NoDataSvg from "./NoDataSvg";

const WarningCourses = ({ error }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="warning"
  >
    <div className="warning-container">
      <NoDataSvg className="warning__img" />
      <h2 className="warning__title">{error}</h2>
    </div>
  </motion.article>
);

export default WarningCourses;
