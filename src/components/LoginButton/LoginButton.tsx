import * as React from "react";
import styles from "./LoginButton.module.scss";

type LoginButtonProps = {
  onClick: () => void;
  variant?: "enter" | "exit";
};

export const LoginButton = ({ onClick, variant = "enter" }: LoginButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${
        variant === "exit" ? styles.exit : styles.enter
      }`}
      onClick={onClick}
    >
      login
    </button>
  );
};
