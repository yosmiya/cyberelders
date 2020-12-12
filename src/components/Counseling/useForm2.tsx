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

function useForm(callback: Function, validateForm: Function) {
  const [values, setValues] = useState(defState);
  const [errors, setErrors] = useState(defState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     callback();
  //     setIsSubmitting(false);
  //   }
  // }, [callback, errors, isSubmitting]);

  function handleSubmit(event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    if (event) event.preventDefault();
    setErrors(validateForm(values));

    if (Object.keys(errors).length === 0) {
      console.log("do");
    }
  }

  function validate() {
    return Object.keys(errors).length < 1;
  }

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
    validate,
    values,
    errors,
  };
}

export default useForm;
