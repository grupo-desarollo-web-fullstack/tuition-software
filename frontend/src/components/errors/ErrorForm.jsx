import { BiError } from "react-icons/bi";
import { motion } from "framer-motion";

const ErrorForm = ({ error, className, containerClassName = "" }) => (
  <motion.article
    initial={{ height: 0 }}
    animate={{ height: "2.859rem" }}
    exit={{ height: 0 }}
    transition={{
      duration: 0.25,
    }}
    className={`error ${className || ""}`.trimEnd()}
  >
    <div className={`error-container ${containerClassName}`.trimEnd()}>
      <BiError color="#f5f2e7" size={20} />
      <h2 className="error__title">{error.message}</h2>
    </div>
  </motion.article>
);

export default ErrorForm;
