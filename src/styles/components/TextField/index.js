import React from 'react';
import { Container } from './styles';
import { Input } from '../Input'
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

export default function TextField({ id, name, label, ...rest }) {
  const { register, errors } = useFormContext();
  const { message } = errors[name] || '';
  
  return (
    <Container error={message}>
      <label htmlFor={id}>{label}</label>
      <Input 
        id={id}
        name={name} 
        ref={register}
        {...rest}
      />
      { message &&
        <p>{message}</p>
      }
    </Container>
  )
}

TextField.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};

TextField.defaultProps = {
  id: '',
  label: '',
};