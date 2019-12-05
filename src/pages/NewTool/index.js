import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../styles/components/Dialog';

export default function NewTool({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <h4>New Tool</h4>
    </Dialog>
  )
}

NewTool.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}