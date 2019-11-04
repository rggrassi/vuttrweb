import { useState, useEffect } from 'react';

function validate(values, schema) {
  return schema.validate(values, { 
    abortEarly: false,
    stripUnknown: true
  })
  .then(() => null)
  .catch(err => {
    const errors = err.inner.reduce((result, error) => {
      result[error.path] = error.message
      return result;
    }, {})
    return errors;            
  })
}

export default function useForm(callback, schema) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!errors && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting, callback]);

  const handleSubmit = async e => {
    e.preventDefault();

    setErrors(await validate(values, schema));
    setSubmitting(true);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' });
  }

  return {
    values,
    errors,
    handleSubmit,
    handleChange
  }
}