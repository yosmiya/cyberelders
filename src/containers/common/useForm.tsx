import { useState, useEffect } from "react";

type State = {
  course1: string;
  course2: string;
  course3: string;
  course4: string;
  job: string;
  exp: string;
  name: string;
  kana: string;
  mail: string;
  other: string;
  all: string;
};

const defState: State = {
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
