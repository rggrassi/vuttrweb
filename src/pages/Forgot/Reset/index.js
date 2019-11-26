import React, { useState } from 'react';
import TextField from '../../../styles/components/TextField';
import SubmitButton from '../../../styles/components/SubmitButton';
import ContextBanner from '../../../styles/components/ContextBanner';
import useForm from 'react-hook-form';
import * as Yup from 'yup';
import api from '../../../services/api';

export default function ForgotConfirm({ location }) {
  const [query, token] = location.search.split('=');

  const [state, setState] = useState({
    fetching: false,
    error: null
  });

  const schema = Yup.object().shape({
    password: Yup.string()
      .min(6)
      .required(),
    passwordConfirm: Yup.string()
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
      <h5>Choose a new password</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          name='password'
          type='password'
          placeholder='New password'
          autoFocus='on'
          register={register}
          error={errors.password && errors.password.message}
        />
        <TextField
          name='passwordConfirm'
          type='password'
          placeholder='New password (again)'
          register={register}
          error={errors.passwordConfirm && errors.passwordConfirm.message}
        />
        <SubmitButton caption='Submit' />
      </form>
    </React.Fragment>
  );
}
