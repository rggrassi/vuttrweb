import React from 'react';
import { Input } from '../Input';
import { Container } from './styles';
import PropTypes from 'prop-types';

export default function TagsInput({ label, tags, addTag, removeTag }) {
  function keyPressed(e) {
    if (e.key !== 'Enter') { 
      return
    }
    if (!e.target.value) {
      return;
    } 

    addTag(e.target.value);
    e.target.value = '';
  }

  function handleRemove(index) {
    removeTag(index);
  }

  return (
    <Container>
      <label>{label}</label>
      <div>
        <ul>
          { tags.map((tag, idx) => (
            <li key={idx}>
              <span>{tag}</span>
              <span onClick={() => handleRemove(idx)}>x</span>
            </li>
          ))}
        </ul>
        <Input placeholder='Press enter to add tags' onKeyPress={keyPressed}/>
      </div>
    </Container>
  )
}

TagsInput.propTypes = {
  label: PropTypes.string,
  tags: PropTypes.array.isRequired,
  addTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired  
}

TagsInput.defaultProps = {
  label: '',
  tags: []
}