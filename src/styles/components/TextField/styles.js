import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  border: 0;
  padding: 0;

  input {
    height: 50px;
    padding: 0 15px;
    border-radius: 5px;
    font-size: 20px;
    letter-spacing: 0.4px;
    width: 100%;

    &::placeholder {
      color: ${props => props.error ? '#f95e5a' : '#b1adb9'};
    }

    &:focus {
      background:  #ebeaed;
    }
    
    background: ${props => props.error ? '#feefee' : '#f5f4f6'};
    border: 1px solid ${props => props.error ? '#f95e5a' : '#dedce1'};
    color: ${props => props.error ? '#f95e5a' : '#8f8a9b'};
  }

  p {
    display:  ${props => props.error ? 'block' : 'none'};
    padding: 0 0 5px;
    text-align: right;
    color: #F95E5A;
    font-size: 16px;
  }

  p::first-letter {
    text-transform: capitalize;
  }
`