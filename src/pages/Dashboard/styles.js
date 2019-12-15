import styled from 'styled-components';
import { PrimaryButton } from '../../styles/components/PrimaryButton';
import { Container as Checkbox } from '../../styles/components/Checkbox/styles';
import { Input } from '../../styles/components/Input';

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: #ebeaed;
`
export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;  
  padding-top: 16px;
  p {
    font-size: 20px;
    font-weight: 600;
    color: #170c3a;
    letter-spacing: 0.48px;
  }  
`
export const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  
  ${PrimaryButton} {
    padding: 0 24px;
    background: #365df0;
    &:hover {
      background : #2f55cc ;
    }
    span {
      padding-right: 8px;
    }
  }
`
export const Search = styled.div`
  display: flex;
  align-items: center;
  
  div {
    position: relative;
    ${Input} {
      line-height: 50px;
      padding: 0 44px;
    }

    span {
      position: absolute;
      left: 0px;
      top: 0px;
      height: 100%;
      padding-left: 16px;
      display: flex;
      align-items: center;
      img {        
        height: 15px;
        width: 15px;
      }
    }
  }

  ${Checkbox} {
    margin-left: 16px;
  }
`
export const ToolsContainer = styled.div`  
  width: 100%;
  max-width: 960px;
  margin: 240px auto 0 auto;

  li {
    margin: 16px 0;
    padding: 16px;
    background: #fff;
    border-radius: 5px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        text-decoration: underline;
        color: #365DF0;
        font-size: 18px;
        font-weight: 600;
        transition: color 0.5s;        
        &:hover {
          color: #244AA8;
        }
      }

      button {
        height: 35px;
        background: none;
        border: 0;
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 0.36px;
        color: #fcaeac;
        span {
          padding-right: 8px;
        }
        transition: color 0.5s;
        &:hover {
          color: #F95E5A ;
        }
      }
    }

    p {
      color: #170c3a;
      font-size: 16px;
    }

    p:last-of-type {
      margin-top: 8px;
      font-weight: 600;
    }
  }
`