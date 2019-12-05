import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalContainer, Overlay } from './styles';

export default function Dialog({ open, onClose, children }) {
  return (
    <React.Fragment>
      <Modal open={open}>
        <ModalContainer open={open}>
          { children }
        </ModalContainer>
      </Modal>       
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