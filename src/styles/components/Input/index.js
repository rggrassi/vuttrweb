import styled from 'styled-components';

export const Input = styled.input`
  height: 50px;
  padding: 0 16px;
  border-radius: 5px;
  font-size: 20px;
  letter-spacing: 0.4px;
  width: 100%;
  background: #f5f4f6;
  border: 1px solid #dedce1;
  color: #8f8a9b;

  &::placeholder {
    color: #b1adb9;
  }

  &:focus {
    background:  #ebeaed;
  }    
`