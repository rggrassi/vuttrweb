import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, SubmitButton } from './styles';
import TextField from '../../styles/components/TextField';
import { FaSpinner } from 'react-icons/fa';
import * as Yup from 'yup';
import useForm from '../../hooks/useForm';
import { signInRequest } from '../../store/actions/auth';

export default function SignIn() {
  const dispatch = useDispatch();
  const fetching = useSelector(state => state.auth.fetching);

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
        <SubmitButton fetching={fetching}>
          { fetching ? <FaSpinner color='#fff' size={22}/> : 'Sign In' }
        </SubmitButton>
      </Form>
      <p>
        New to VUTTR? &nbsp;
        <Link to="#">Create an account</Link>
      </p>
    </Container>
  );    
}