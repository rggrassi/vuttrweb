import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background: #fff;
  border: 1px solid #ebeaed;
  border-radius: 5px;

  h3 {
    margin-bottom: 32px;
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
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    color: #170c3a;

    margin-bottom: 8px;
  }

  a {
    color: #365df0;
    &:hover {
      color: #244aa8;
    }
  }

  .context-banner {
    margin-bottom: 32px;
  }
`