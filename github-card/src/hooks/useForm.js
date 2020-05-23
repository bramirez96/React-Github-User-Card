import { useState } from "react";

const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }
  const clearForm = e => {
    if (e) e.preventDefault();
    setValues(initialValues);
  }

  return [values, changeHandler, clearForm]
}

export default useForm;