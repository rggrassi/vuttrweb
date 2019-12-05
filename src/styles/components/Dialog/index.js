import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalContainer, Backdrop, DialogContainer } from './styles';

export default function Dialog({ open, onClose, children }) {
  function handleClose(event) {
    const { id } = event.target;
    if (id === 'modal-container') {
      onClose()        
    }
  }

  return (
    <React.Fragment>
      { open &&
        <Modal onClick={handleClose}>
          <Backdrop/>
          <ModalContainer>
            <DialogContainer>
              { children }
            </DialogContainer>
          </ModalContainer>
        </Modal>          
      }
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