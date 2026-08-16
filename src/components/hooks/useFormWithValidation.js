import { useState, useCallback } from "react";

const useFormWithValidation = (defaultValues) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prevValues) => ({ ...prevValues, [name]: value }));

    // built-in browser validation message
    setErrors((prevErros) => ({
      ...prevErros,
      [name]: e.target.validationMessage,
    }));

    // check if the form is valid
    setIsValid(e.target.closest("form").checkValidity());
  }

  const resetForm = useCallback(
    (newValues = defaultValues, newErros = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErros);
      setIsValid(newIsValid);
    },
    [defaultValues],
  );

  return { values, handleChange, errors, isValid, resetForm };
};

export default useFormWithValidation;
