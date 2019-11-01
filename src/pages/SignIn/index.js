import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from './styles';

export default function SignIn() {
  return (
    <Container>
      <h3>Sign in to VUTTR</h3>
      <Form>
        <input placeholder='Email address' autoComplete='false' autoFocus/>
        <input placeholder='Password' type="password" autoComplete='false'/>
        <button type='submit'>Sign In</button>
      </Form>
      <p>
        New to VUTTR?
        <Link>Create an account</Link>
      </p>
    </Container>
  )    
}