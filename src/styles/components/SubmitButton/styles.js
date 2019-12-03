import styled, { keyframes } from 'styled-components';
import { Button } from '../Button';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const ButtonSuccess = styled(Button)`
  background: #0dcb7d;
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