import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const Button = styled.button`
  height: 50px;
  background: #0dcb7d;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.36px;
  color: #fff;
  transition: background 0.3s;
  margin-top: 16px;

  &:hover {
    background : #10b26c;
  }

  &[disabled] {
    cursor: not-allowed;
    background: #88edc4;
    color: #e7fbf3;
  }

  svg {
    vertical-align: middle;
    animation: ${rotate} 2s linear infinite;
  }
`