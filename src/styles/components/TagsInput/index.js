import React from 'react';
import { Input } from '../Input';
import { Container } from './styles';

export default function TagsInput() {
  function keyPressed(e) {
    if (e.key !== 'Enter') { 
      return
    }
    if (!e.target.value) {
      return;
    } 

  }

  return (
    <Container>
      <ul>
        <li>React</li>
        <li>Node</li>
        <li>JavaScript</li>
      </ul>
      <Input onKeyPress={keyPressed}/>
    </Container>
  )
}