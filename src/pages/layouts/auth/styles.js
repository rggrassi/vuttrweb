import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
  }

  p {
    width: 100%;
    max-width: 340px;
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    color: #170c3a;
  }

  a {
    color: #365df0;
    &:hover {
      color: #244aa8;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 100%;
    max-width: 340px;
    padding: 24px;
    border: 1px solid #ebeaed;
    border-radius: 5px;

    input {
      margin-bottom: 8px;
    }
  }  

  button {
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
  }
`