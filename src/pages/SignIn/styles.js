import styled from 'styled-components';

export const Container = styled.div`
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
    opacity: 0.8;
    color: #365df0;

    &:hover {
      color: #244aa8;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  max-width: 340px;
  padding: 24px;
  border: 1px solid #ebeaed;
  border-radius: 5px;

  input {
    height: 50px;
    padding: 0 15px;
    margin-bottom: 8px;
    background: #f5f4f6;
    border-radius: 5px;
    border: 1px solid #dedce1;
    font-size: 20px;
    color: #8f8a9b;
    letter-spacing: 0.4px;

    &::placeholder {
      color: #b1adb9;
    }

    &:focus {
      background: #ebeaed;      
    }
  }

  button {
    height: 50px;
    background: #0DCB7D;
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
  }
`