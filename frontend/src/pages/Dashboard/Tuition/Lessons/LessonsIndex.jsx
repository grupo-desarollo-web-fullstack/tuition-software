import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LessonsIndex = () => (
  <motion.article
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="tuition__lessons__not-found"
  >
    <h2 className="tuition__lessons__title">
      Elige un curso para ver sus clases 📘
    </h2>
    <p className="tuition__lessons__paragraph">
      Gracias por utilizar nuestro servicio, selecciona el curso de tu
      preferencia en{" "}
      <Link
        to="/dashboard/tuition/"
        className="tuition__lessons__paragraph tuition__lessons__paragraph--link"
      >
        /dashboard/tuition/
      </Link>{" "}
      😉
    </p>
  </motion.article>
);

export default LessonsIndex;
