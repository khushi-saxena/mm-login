import * as React from "react";
import styles from "./LoginButton.module.scss";

type LoginButtonProps = {
  onClick: () => void;
  className?: string;
};

export const LoginButton = ({ onClick, className }: LoginButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.button, className].filter(Boolean).join(" ")}
      onClick={onClick}
    >
      login
    </button>
  );
};
