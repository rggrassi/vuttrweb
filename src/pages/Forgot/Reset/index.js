import React, { useState } from 'react';
import TextField from '../../../styles/components/TextField';
import SubmitButton from '../../../styles/components/SubmitButton';
import ContextBanner from '../../../styles/components/ContextBanner';
import useForm from 'react-hook-form';
import * as Yup from 'yup';
import api from '../../../services/api';

export default function ForgotConfirm({ location }) {
  const [, token] = location.search.split('=');

  const [state, setState] = useState({
    fetching: false,
    error: null
  });

  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6)
      .required(),
    confirmPassword: Yup.string()
      .min(6)
      .required(),
  });

  const { register, errors, handleSubmit } = useForm({
    validationSchema: schema
  });

  async function onSubmit({ password, passwordConfirm }) {
    try {
      setState({ 
        ...state, 
        fetching: true, 
        error: null
      });   
      await api.put(`/forgot/${token}`, { 
        password,
        passwordConfirm
      });      
      setState({ ...state, fetching: false });   
    } catch (err) {
      setState({ 
        ...state, 
        error: { message: err.message }, 
        fetching: false
      });
    }    
  }

  return (
    <React.Fragment>
      { state.error &&
        <ContextBanner message={state.error.message}/>
      }
      <h5>Choose a new password</h5>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField 
          name='password'
          type='password'
          placeholder='New password'
          autoFocus='on'
          register={register}
          error={errors.password && errors.password.message}
        />
        <TextField
          name='confirmPassword'
          type='password'
          placeholder='Confirm password'
          register={register}
          error={errors.confirmPassword && errors.confirmPassword.message}
        />
        <SubmitButton caption='Submit' loading={state.fetching}/>
      </form>
    </React.Fragment>
  );
}