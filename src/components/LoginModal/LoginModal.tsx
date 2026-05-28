import * as React from "react";
import styles from "./LoginModal.module.scss";

type LoginModalProps = {
  onClose: () => void;
  isClosing?: boolean;
};

type FocusedField = "email" | "password" | null;

export const LoginModal = ({ onClose, isClosing = false }: LoginModalProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [focusedField, setFocusedField] = React.useState<FocusedField>(null);
  const [showAdditionalOptions, setShowAdditionalOptions] =
    React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <div
      className={`${styles.modal} ${
        isClosing ? styles.modalClosing : styles.modalEntering
      }`}
    >
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="close"
      >
        ×
      </button>

      <h2 className={styles.title}>login</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label
            className={`${styles.label} ${
              focusedField === "email" ? styles.labelActive : ""
            }`}
            htmlFor="email"
          >
            email
          </label>
          <input
            id="email"
            className={`${styles.input} ${
              focusedField === "email" ? styles.inputActive : ""
            }`}
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
          />
        </div>

        <div className={styles.field}>
          <label
            className={`${styles.label} ${
              focusedField === "password" ? styles.labelActive : ""
            }`}
            htmlFor="password"
          >
            password
          </label>
          <input
            id="password"
            className={`${styles.input} ${
              focusedField === "password" ? styles.inputActive : ""
            }`}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField(null)}
          />
        </div>

        <button type="submit" className={styles.submit}>
          login
        </button>

        <button
          type="button"
          className={styles.additionalOptions}
          onClick={() => setShowAdditionalOptions((open) => !open)}
          aria-expanded={showAdditionalOptions}
        >
          additional options
          <span
            className={`${styles.caret} ${
              showAdditionalOptions ? styles.caretOpen : ""
            }`}
            aria-hidden
          />
        </button>

        <div
          className={`${styles.linksPanel} ${
            showAdditionalOptions ? styles.linksPanelOpen : ""
          }`}
        >
          <div className={styles.links}>
            <a href="#forgot">forgot your password?</a>
            <a href="#register">register</a>
          </div>
        </div>
      </form>
    </div>
  );
};
