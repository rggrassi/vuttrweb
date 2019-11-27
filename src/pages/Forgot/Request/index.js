import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../../../styles/components/TextField';
import SubmitButton from '../../../styles/components/SubmitButton';
import ContextBanner from '../../../styles/components/ContextBanner';
import useForm from 'react-hook-form';
import * as Yup from 'yup';
import api from '../../../services/api';

export default function Forgot() {
  const [state, setState] = useState({
    fetching: false,
    feedback: {
      error: false,
      success: false,
      payload: ''
    },
    //error: null,
    //success: false 
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
        feedback: null
        //error: null
      });   
      await api.post('/forgot', { 
        email, 
        redirect: 'http://localhost:3000/reset' 
      });      
      setState({ 
        ...state, 
        fetching: false, 
        feedback: {
          error: false,
          success: true,
          payload: email
        }
      });   
    } catch (err) {
      setState({ 
        ...state, 
        feedback: {
          error: true,
          success: false,
          payload: err.message
        },
        //error: { message: err.message }, 
        fetching: false
      });
    }    
  }

  return (
    <React.Fragment>
      { state.feedback.error &&  
        <ContextBanner message={state.feedback.payload}/>
      }
      <h5>Forgot your password?</h5>
      { !state.feedback.success && 
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
      }
      { state.feedback.success &&
        <React.Fragment>
          <p>We sent a recovery link to your email address:</p>
          <div>
            <h4>We sent a recovery link to your email address:</h4>
          </div>
        </React.Fragment>
      }
      <hr/>
      <p>
        <Link to='/'>Back to enter</Link>
      </p>
    </React.Fragment>
  )
}