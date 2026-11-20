import "./RegisterModal.css";
import useFormWithValidation from "../../components/hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useMemo } from "react";

const RegisterModal = ({
  isOpen,
  onRegister,
  onClose,
  isLoading,
  onOpenLogin,
  initialEmail = "",
  error,
}) => {
  const defaultValues = useMemo(
    () => ({
      name: "",
      avatar: "",
      email: initialEmail,
      password: "",
    }),
    [initialEmail],
  );

  const { values, handleChange, errors, resetForm, isValid } =
    useFormWithValidation(defaultValues);

  useEffect(() => {
    if (!isOpen || initialEmail) {
      resetForm(defaultValues, {}, false);
    }
  }, [isOpen, resetForm, defaultValues, initialEmail]);

  function handleSubmit(e) {
    e.preventDefault();

    if (isValid) {
      onRegister({
        name: values.name,
        avatar: values.avatar,
        email: values.email,
        password: values.password,
      });
    }
  }

  const handleSwitchToLogin = () => {
    onClose(); // close Register
    onOpenLogin(values.email); // open Login
  };

  return (
    <ModalWithForm
      title="Register"
      name="register"
      buttonText="Register"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      isLoading={isLoading}
      footerText="Already have an account? Login"
      onSecondaryAction={handleSwitchToLogin}
    >
      <input
        type="text"
        name="name"
        autoComplete="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        className={`modal__input ${errors.name ? "modal__input_invalid" : ""}`}
        required
      />
      <input
        type="text"
        name="avatar"
        placeholder="Avatar URL"
        value={values.avatar}
        onChange={handleChange}
        className={`modal__input ${errors.avatar ? "modal__input_invalid" : ""}`}
      />
      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        className={`modal__input ${errors.email ? "modal__input_invalid" : ""}`}
        required
      />
      <input
        type="password"
        name="password"
        autoComplete="new-password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        className={`modal__input ${errors.password ? "modal__input_invalid" : ""}`}
        autoComplete="new-password"
        required
      />
      {error && (
        <p className="modal__error" role="alert">
          {error}
        </p>
      )}
    </ModalWithForm>
  );
};

export default RegisterModal;
