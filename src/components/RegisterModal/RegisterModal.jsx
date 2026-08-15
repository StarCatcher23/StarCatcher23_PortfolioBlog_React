import "./RegisterModal.css";
import useFormWithValidation from "../../components/hooks/useFormWithValidation";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";

const RegisterModal = ({
  isOpen,
  onRegister,
  onClose,
  isLoading,
  onOpenLogin,
}) => {
  const defaultValues = {
    name: "",
    avatar: "",
    email: "",
    password: "",
  };

  const { values, handleChange, errors, resetForm, isValid } =
    useFormWithValidation(defaultValues);

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

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
    onOpenLogin(); // open Login
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
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        className={`modal__input ${errors.name ? "modal__input_invalid" : ""}`}
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
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        className={`modal__input ${errors.email ? "modal__input_invalid" : ""}`}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        className={`modal__input ${errors.password ? "modal__input_invalid" : ""}`}
      />
    </ModalWithForm>
  );
};

export default RegisterModal;
