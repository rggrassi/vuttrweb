import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '../../styles/components/Dialog';
import TextField from '../../styles/components/TextField'
import TagsInput from '../../styles/components/TagsInput';
import { Container } from './styles';

export default function NewTool({ open, onClose }) {
  const [tags, setTags] = useState([]);

  function addTag(tag) {
    setTags(old => [...old, tag]);
  }

  function removeTag(index) {
    setTags(old => old.filter((tag, idx) => index !== idx));    
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <Container>
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
          <TagsInput 
            label='Tags' 
            tags={tags} 
            addTag={addTag} 
            removeTag={removeTag}
          />
        </form>
      </Container>
    </Dialog>
  )
}

NewTool.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}