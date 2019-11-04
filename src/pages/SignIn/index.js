import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from './styles';
import useForm from '../../hooks/useForm';
import * as Yup from 'yup';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required()
      .email(),
    password: Yup.string()
      .required()
      .min(6)  
  });

  const { 
    values, 
    handleChange, 
    errors, 
    handleSubmit 
  } = useForm(saveUser, schema);

  function saveUser() {
    console.log(values)  
  }

  return (    
    <Container>
      { JSON.stringify(errors) }
      <h3>Sign in to VUTTR</h3>
      <Form onSubmit={handleSubmit}>
        <input name='email' placeholder='Email address' onChange={handleChange} autoComplete='false' autoFocus/>
        <input name='password' placeholder='Password' type="password" onChange={handleChange} autoComplete='false'/>
        <button type='submit'>Sign In</button>
      </Form>
      <p>
        New to VUTTR? &nbsp;
        <Link to='#'>Create an account</Link>
      </p>
    </Container>
  )    
}