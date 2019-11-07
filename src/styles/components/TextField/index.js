import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';

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

TextField.propTypes = {
  error: PropTypes.string,
  register: PropTypes.func.isRequired
};

TextField.defaultProps = {
  error: ''
};