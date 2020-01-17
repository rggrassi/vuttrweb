import React from 'react';
import PropTypes from 'prop-types';
import { Container, Overlay } from './styles';

export default function Dialog({ open, onClose, children }) {
  return (
    <React.Fragment>
      <Container open={open}>
        <div>
          { children }
        </div>
      </Container>       
      <Overlay open={open} onClick={onClose}/>   
    </React.Fragment>
  )
}

Dialog.propTypes = {
  children: PropTypes.element,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

Dialog.defaultProps = {
  open: false
}