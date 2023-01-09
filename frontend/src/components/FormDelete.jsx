import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { Form, useActionData, useSubmit } from "react-router-dom";
import Button from "./Button";
import ErrorForm from "./errors/ErrorForm";
import Modal from "./Modal";

const FormDelete = ({ tuition, name }) => {
  const actionData = useActionData();
  const [isModal, setIsModal] = useState(false);
  const submit = useSubmit();
  const handleSubmitDelete = (e) => {
    e.preventDefault();
    if (isModal) {
      submit(e.target);
      return;
    }
    setIsModal(true);
  };
  const handleCloseModal = () => {
    setIsModal(false);
  };
  return (
    <Form
      method="delete"
      action={`./?tuitionId=${tuition.id}&textConfirm=${name}`}
      relative
      className="form form--delete"
      onSubmit={handleSubmitDelete}
    >
      <div className="form-container">
        <h3 className="form__title">
          ¿Ya no estás interesado o te confundiste de curso? 👇
        </h3>
        <Button modifiers={["danger", "dark"]}>Eliminar matrícula</Button>
        <AnimatePresence>
          {isModal && (
            <Modal
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: "-50%",
                y: "-50%",
                background: "rgba(38, 102, 207, 1)",
              }}
              exit={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              handleCloseModal={handleCloseModal}
            >
              <h2 className="modal__title">¿Estás seguro en eliminar?</h2>
              <p className="modal__paragraph">
                Escribe{" "}
                <span className="modal__paragraph modal__paragraph--confirm">
                  {name}
                </span>{" "}
                para confirmar
              </p>
              <label className="modal__label" htmlFor="confirm">
                <AiFillWarning size={20} color="#2C3333" />
                <input
                  name="confirm"
                  type="text"
                  id="confirm"
                  className="modal__input"
                />
              </label>
              {actionData && (
                <ErrorForm
                  className="error--modal"
                  containerClassName="error-container--modal"
                  error={new Error(actionData.error)}
                />
              )}
              <Button modifiers={["danger", "dark"]}>Confirmar</Button>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </Form>
  );
};

export default FormDelete;
