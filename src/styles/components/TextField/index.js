import React from 'react';
import { Container } from './styles';
import { Input } from '../Input'
import PropTypes from 'prop-types';

export default function TextField({ name, type, error, placeholder, register, label, ...rest }) {
  return (
    <Container error={error}>
      <label htmlFor={name}>{label}</label>
      <Input 
        id={name}
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
  register: PropTypes.func.isRequired,
  label: PropTypes.string
};

TextField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  error: ''
};