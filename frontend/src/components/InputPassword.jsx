import { useRef } from "react";
import { MdVpnKey } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import Button from "./Button";

const InputPassword = ({ className }) => {
  const inputPassword = useRef();
  const eyeIcon = useRef();
  const handleClickShow = () => {
    eyeIcon.current.classList.toggle("button--icon-eye--close");
    if (inputPassword.current.type === "text")
      return (inputPassword.current.type = "password");
    inputPassword.current.type = "text";
  };
  return (
    <label htmlFor="password" className={`form__label fadeInLeft ${className}`}>
      <MdVpnKey color="#2C3333" />
      <input
        ref={inputPassword}
        className="form__input"
        placeholder="Contraseña"
        required
        id="password"
        name="password"
        type="password"
      />
      <Button
        type="button"
        onClick={handleClickShow}
        ref={eyeIcon}
        isSound={false}
        modifiers="icon-eye"
      >
        <BsEyeFill />
      </Button>
    </label>
  );
};

export default InputPassword;
