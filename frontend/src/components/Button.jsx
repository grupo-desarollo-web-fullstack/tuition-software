import { useEffect, useRef } from "react";
import useSound from "use-sound";
import soundButton from "@assets/sounds/button.mp3";

const Button = ({ fetcher, children, type, className }) => {
  const buttonSubmit = useRef();
  useEffect(() => {
    if (fetcher) {
      if (fetcher.state !== "idle") {
        buttonSubmit.current.classList.add("button--disabled");
        return;
      }
      buttonSubmit.current.classList.remove("button--disabled");
    }
  }, [fetcher?.state]);
  const [play] = useSound(soundButton);
  return (
    <button
      className={`button ${(Array.isArray(type) ? type : [type])
        .map((ty) => `button--${ty}`)
        .join(" ")} ${className || ""}`}
      ref={buttonSubmit}
      onClick={play}
    >
      {fetcher?.state === "loading"
        ? "Cargando..."
        : fetcher?.state === "submitting"
        ? "Enviando datos..."
        : children}
    </button>
  );
};

export default Button;
