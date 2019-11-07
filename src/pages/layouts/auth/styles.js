import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 340px;
  padding: 24px;
  background: #fff;
  border: 1px solid #ebeaed;
  border-radius: 5px;

  h3 {
    margin: 16px 0 16px 0;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 8px;
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
`