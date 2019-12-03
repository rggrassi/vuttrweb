import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';
 
export default function Checkbox({ caption, ...rest }) {
  return (
    <Container htmlFor='tags'>
      {caption}
      <input id='tags' type='checkbox' {...rest}/>
      <span/>
    </Container>
  )
}

Checkbox.propTypes = {
  caption: PropTypes.string.isRequired
}
