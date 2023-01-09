import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

const ButtonAnimate = motion(Button);

const Modal = ({
  children,
  handleCloseModal,
  initial,
  animate,
  exit,
  buttonClose,
  className,
}) => (
  <motion.div
    initial={{
      "--value-bg": "rgba(44, 51, 51, 0)",
    }}
    animate={{
      "--value-bg": "rgba(44, 51, 51, 0.5)",
    }}
    exit={{
      "--value-bg": "rgba(44, 51, 51, 0)",
    }}
    className="modal__background"
  >
    <motion.article
      initial={initial}
      animate={animate}
      exit={exit}
      className={`modal ${className || ""}`.trimEnd()}
    >
      <div className="modal-container">{children}</div>

      {buttonClose || (
        <ButtonAnimate
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
          isSound={false}
          modifiers="close"
        >
          <IoMdClose
            color="#F5F2E7"
            className="tuition__lessons__close"
            size={20}
          />
        </ButtonAnimate>
      )}
    </motion.article>
  </motion.div>
);

export default Modal;
