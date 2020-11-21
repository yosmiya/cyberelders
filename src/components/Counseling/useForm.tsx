import { useState, useEffect } from "react";
import { Counseling } from "services/models/counseling";

const defState: Counseling = {
  course1: "",
  course2: "",
  course3: "",
  course4: "",
  job: "",
  exp: "",
  name: "",
  kana: "",
  mail: "",
  other: "",
  all: "",
};

const useForm = (callback: Function, validate: Function) => {
  const [values, setValues] = useState(defState);
  const [errors, setErrors] = useState(defState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (
        !(
          values.name === "" ||
          values.name === undefined ||
          values.name === null
        )
      ) {
        callback();
      }

      setIsSubmitting(false);
    }
  }, [callback, errors, isSubmitting, values.name]);

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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleTextareaChange,
    handleSelectChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
