import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Form } from './styles';
import TextField from '../../styles/components/TextField';
import useForm from '../../hooks/useForm';
import * as Yup from 'yup';
import { signInRequest } from '../../store/actions/auth';

export default function SignIn() {
  const dispatch = useDispatch();

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
  } = useForm(signIn, schema);

  function signIn() {
    console.log(values);
    const { email, password } = values;
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <h3>Sign in to VUTTR</h3>
      <Form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email address"
          error={errors && errors.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={errors && errors.password}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </Form>
      <p>
        New to VUTTR? &nbsp;
        <Link to="#">Create an account</Link>
      </p>
    </Container>
  );    
}