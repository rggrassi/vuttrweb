import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../../styles/components/TextField';
import { FaSpinner } from 'react-icons/fa';
import { signInRequest, signInReset } from '../../store/actions/auth';
import * as Yup from 'yup';
import useForm from 'react-hook-form';

export default function SignIn() {
  const dispatch = useDispatch();
  const { fetching, error } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(signInReset());
  }, [dispatch])

  const schema = Yup.object().shape({
    email: Yup.string()
      .required()
      .email(),
    password: Yup.string()
      .min(6)  
      .required()
  });
  
  const { register, errors, handleSubmit } = useForm({
    validationSchema: schema
  });

  function onSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }  

  return (
    <React.Fragment>
      <h3>{error && error.message}</h3>
      <h3>Sign in to VUTTR</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="email"
          type="email"
          placeholder="Email address"
          autoComplete='off'
          autoFocus='on'
          register={register}
          error={errors.email && errors.email.message}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          autoComplete='off'
          register={register}
          error={errors.password && errors.password.message}
        />
        <button type='submit' disabled={fetching}>
          { fetching ? <FaSpinner color='#fff' size={22}/> : 'Sign In' }
        </button>
      </form>
      <p>
        New to VUTTR? &nbsp;
        <Link to="#">Create an account</Link>
      </p>
    </React.Fragment>
  )  
}