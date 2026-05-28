import * as React from "react";
import { LoginButton } from "./components/LoginButton";
import { LoginModal } from "./components/LoginModal";

import "./App.scss";

const MODAL_TRANSITION_MS = 360;

export default () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModalClosing, setIsModalClosing] = React.useState(false);
  const [isButtonExiting, setIsButtonExiting] = React.useState(false);

  const openModal = () => {
    setIsButtonExiting(true);
    window.setTimeout(() => {
      setIsModalOpen(true);
      setIsButtonExiting(false);
    }, 180);
  };

  const closeModal = () => {
    setIsModalClosing(true);
    window.setTimeout(() => {
      setIsModalOpen(false);
      setIsModalClosing(false);
    }, MODAL_TRANSITION_MS);
  };

  return (
    <div className={`container${isModalOpen ? " container--modalOpen" : ""}`}>
      <h1 className={`welcome${isModalOpen ? " welcome--modalOpen" : ""}`}>
        welcome!
      </h1>

      {!isModalOpen && (
        <LoginButton
          className={isButtonExiting ? "loginButton--exit" : "loginButton--enter"}
          onClick={openModal}
        />
      )}

      {isModalOpen && (
        <LoginModal isClosing={isModalClosing} onClose={closeModal} />
      )}
    </div>
  );
};
