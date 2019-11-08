import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';

export default function TextField({ name, type, error, placeholder, register, ...rest }) {
  return (
    <Container error={error}>
      <input 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        autoComplete='off' 
        ref={register} 
        {...rest}
      />
      { error &&
        <p>{error}</p>
      }
    </Container>
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  register: PropTypes.func.isRequired
};

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
  error: ''
};