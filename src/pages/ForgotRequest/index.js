import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../../styles/components/TextField';
import SubmitButton from '../../styles/components/SubmitButton';
import ContextBanner from '../../styles/components/ContextBanner';
import useForm from 'react-hook-form';
import * as Yup from 'yup';
import api from '../../services/api';

export default function Forgot() {
  const [state, setState] = useState({
    fetching: false,
    error: null    
  }) 
  
  const schema = Yup.object().shape({
    email: Yup.string()
      .required()
      .email()
  });
  
  const { register, errors, handleSubmit } = useForm({
    validationSchema: schema
  });

  async function onSubmit({ email }) {
    try {
      setState({ 
        ...state, 
        fetching: true, 
        error: null
      });   
      await api.post('/forgot', { 
        email, 
        redirect: 'http://localhost:3000/reset' 
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
      <h5>Forgot your password?</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>We'll send a recovery link to</label>
        <TextField
          name='email'
          type='email'
          placeholder='Email address'
          autoFocus='on'
          register={register}
          error={errors.email && errors.email.message}
        />
        <SubmitButton caption='Send recovery link' loading={state.fetching}/>
      </form>
      <hr/>
      <p>
        <Link to='/'>Back to enter</Link>
      </p>

    </React.Fragment>
  )
}