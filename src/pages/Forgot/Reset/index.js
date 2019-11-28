import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../../../styles/components/TextField';
import SubmitButton from '../../../styles/components/SubmitButton';
import ContextBanner from '../../../styles/components/ContextBanner';
import useForm from 'react-hook-form';
import * as Yup from 'yup';
import api from '../../../services/api';

export default function ForgotReset({ location }) {
  const [, token] = location.search.split('=');

  const [state, setState] = useState({
    fetching: false,
    feedback: {
      error: false,
      success: false,
      payload: ''
    }
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

  async function onSubmit({ password, confirmPassword }) {
    try {
      setState({ 
        ...state, 
        fetching: true, 
        feedback: {
          error: false,
          success: false,
          payload: ''
        }
      });   
      await api.put(`/forgot/${token}`, { 
        password,
        confirmPassword
      });      
      setState({
        ...state,
        fetching: false,
        feedback: {
          error: false,
          success: true,
          payload: ""
        }
      });   
    } catch (err) {
      setState({ 
        ...state, 
        fetching: false,
        feedback: { 
          error: true,
          success: false,
          payload: err.message
        }, 
      });
    }    
  }

  return (
    <React.Fragment>
      { state.feedback.error &&
        <ContextBanner type='error' message={state.feedback.payload}/>
      }
      <h5>Choose a new password</h5>
      { !state.feedback.success &&
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
      }
      { state.feedback.success &&
        <ContextBanner type='success' message='Your password has been changed successfully'/>
      }
      <hr/>
      <p>
        <Link to='/'>Back to enter</Link>
      </p>
    </React.Fragment>
  );
}