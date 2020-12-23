import { useState, useEffect } from "react";
import { Contact } from "services/models/contact";

const defState: Contact = {
  name: "",
  kana: "",
  mail: "",
  title: "",
  inquiry: "",
  all: "",
  recaptcha: "",
};

const useForm = (callback: Function, validate: Function) => {
  const [values, setValues] = useState(defState);
  const [errors, setErrors] = useState(defState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [callback, errors, isSubmitting]);

  const handleSubmit = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleTextareaChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
