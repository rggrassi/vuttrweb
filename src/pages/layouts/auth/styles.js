import styled from 'styled-components';
import * as ContextBanner  from '../../../styles/components/ContextBanner/styles';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background: #fff;
  border: 1px solid #ebeaed;
  border-radius: 5px;

  h3, h4, h5 {
    margin-bottom: 32px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 16px;
    color: #170c3a;
    letter-spacing: 0.4px;
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 8px;
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid #dedce1;
    height: 1px;
    padding: 0;
    margin: 20px 0 15px 0;
  }

  p {
    padding: 8px 16px;
    text-align: center;
    font-size: 16px;
    color: #170c3a;
    margin-bottom: 8px;
  }

  ul {
    text-align: center;
    font-size: 16px;
    color: #170c3a;
    margin-bottom: 8px;
  }

  li {
    display: inline-block;
  }

  li:last-of-type {
    &::before {
      content: '';
      border-radius: 50%;
      background: #170c3a;
      width: 4px;
      height: 4px;
      margin: 0 8px 0 4px;
      display: inline-block;
      vertical-align: middle;
    }
  }

  a {
    color: #365df0;
    &:hover {
      color: #244aa8;
    }
  }

  ${ContextBanner.Container} {
    margin-bottom: 32px;
  }
`