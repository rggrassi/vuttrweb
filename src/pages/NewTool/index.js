import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../styles/components/Dialog';
import TextField from '../../styles/components/TextField'
import TagsInput from '../../styles/components/TagsInput';

export default function NewTool({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <h4>
        <span>&#10010;</span>
        Add new tool
      </h4>
      <form noValidate>
        <TextField 
          label='Tool name'
          name='tool'
          autoFocus='on'          
        />
        <TextField
          label='Tool link'
          name='link'          
        />
        <TextField
          label='Tool description'
          name='description'
        />
        <TagsInput/>
      </form>
    </Dialog>
  )
}

NewTool.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}