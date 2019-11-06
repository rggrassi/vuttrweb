import React from 'react';
import { Container } from './styles';

export default function TextField({ error, register, ...rest }) {
  return (
    <Container error={error}>
      <input {...rest} ref={register}/>
      { error &&
        <p>{error}</p>
      }
    </Container>
  )
}