import React from 'react';
import { Container } from './styles';

export default function TextField({ error, ...rest }) {
  return (
    <Container error={error}>
      <input {...rest} autoComplete='off'/>
      { error &&
        <p>{error}</p>
      }
    </Container>         
  )
}