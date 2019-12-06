import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '../../styles/components/TextField';
import SubmitButton from '../../styles/components/SubmitButton';
import ContextBanner from '../../styles/components/ContextBanner';
import { signInRequest, signInReset } from '../../store/actions/auth';
import useForm from 'react-hook-form';
import * as Yup from 'yup';

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
      { error &&
        <ContextBanner message={error.message}/>
      }
      <h3>Sign in to VUTTR</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label='E-mail'
          name='email'
          type='email'
          placeholder='Email address'
          autoFocus='on'
          register={register}
          error={errors.email && errors.email.message}
        />
        <TextField
          label='Password'
          name='password'
          placeholder='Password'
          type='password'
          register={register}
          error={errors.password && errors.password.message}
        />
        <SubmitButton caption='Sign In' loading={fetching} />
      </form>
      <hr/>
      <ul>
        <li>
          <Link to='/forgot'>Forgot password?</Link> &nbsp;
        </li>
        <li>
          <Link to='/register'>Create an account</Link>
        </li>
      </ul>
    </React.Fragment>
  )  
}