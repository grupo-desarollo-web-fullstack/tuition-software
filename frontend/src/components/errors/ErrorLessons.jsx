import Button from "@components/Button";
import { GrPowerCycle } from "react-icons/gr";
import SelectOptionSvg from "@components/svgr/SelectOptionSvg";
import { motion } from "framer-motion";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorLessons = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const handleClick = () => {
    navigate(".", {
      relative: true,
    });
  };
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="error error--lessons"
    >
      <div className="error-container error-container--lessons">
        <SelectOptionSvg className="error__img" />
        <h2 className="error__title error__title--lessons">{error.message}</h2>
        <Button modifiers={["dark", "error-leason"]} onClick={handleClick}>
          <GrPowerCycle size={15} className="error__icon-button" />
          Volver a intentar
        </Button>
      </div>
    </motion.article>
  );
};

export default ErrorLessons;
