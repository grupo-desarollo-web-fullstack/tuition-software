import { useEffect, useRef, forwardRef } from "react";
import useSound from "use-sound";
import soundButton from "@assets/sounds/button.mp3";

const Button = forwardRef(
  (
    {
      fetcher,
      children,
      modifiers = [],
      type = "submit",
      className,
      onClick,
      isSound = true,
    },
    ref,
  ) => {
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
    const handleClick = () => {
      if (onClick) onClick();
      if (isSound) play();
    };
    return (
      <button
        type={type}
        className={`button ${(Array.isArray(modifiers)
          ? modifiers
          : [modifiers]
        )
          .map((ty) => `button--${ty}`)
          .join(" ")} ${className || ""}`}
        ref={ref || buttonSubmit}
        onClick={handleClick}
      >
        {fetcher?.state === "loading"
          ? "Cargando..."
          : fetcher?.state === "submitting"
            ? "Enviando datos..."
            : children}
      </button>
    );
  },
);

export default Button;
