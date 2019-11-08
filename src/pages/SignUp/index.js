import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../../store/actions/auth';
import TextField from '../../styles/components/TextField';
import SubmitButton from '../../styles/components/SubmitButton';
import ContextBanner from '../../styles/components/ContextBanner';
import useForm from 'react-hook-form';
import * as Yup from 'yup';

export default function SignUp() {
  const dispatch = useDispatch();
  const { fetching, error } = useSelector(state => state.auth)

  const schema = Yup.object().shape({
    name: Yup.string()
      .required(),
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

  function onSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <React.Fragment>
      { error &&
        <ContextBanner message={error.message}/>
      }
      <p>Join VUTTR</p>
      <h3>Create your account</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          name='name'
          placeholder='Username'
          autoFocus='on'
          register={register}
          error={errors.name && errors.name.message}
        />
        <TextField 
          name='email'
          placeholder='Email address'
          type='email'            
          register={register}
          error={errors.email && errors.email.message}
        />
        <TextField
          name='password'
          placeholder='Password'
          type='password'
          register={register}
          error={errors.password && errors.password.message}
        />
        <SubmitButton caption='Create account' loading={fetching}/>
      </form>
      <p>
        Already have an account? &nbsp;
        <Link to='/'>Sign in</Link>
      </p>
    </React.Fragment>
  )
}