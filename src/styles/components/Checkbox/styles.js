import styled from 'styled-components';

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  font-size: 16px;
  color: #170c3a;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  span {
    position: absolute;
    top: 4px;
    left: 0;
    height: 15px;
    width: 15px;
    background: #f5f4f6;
    border-radius: 2px;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked + span {
    background: #365df0;
    border-radius: 2px;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked + span:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  span:after {
    left: 2px;
    top: 3px;
    width: 10px;
    height: 4px;
    border: solid white;
    border-width: 2px 2px 0 0;
    transform: rotate(125deg);
  }    
`