import styled from 'styled-components';
import { PrimaryButton } from '../../styles/components/PrimaryButton';
import { Container as Checkbox } from '../../styles/components/Checkbox/styles';
import { Input } from '../../styles/components/Input';

export const Container = styled.div`
  max-width: 960px; 
  width: 100%; 
  margin: 60px auto 0 auto;
`
export const Header = styled.div`
  margin: 60px auto 8px auto;
  max-width: 960px; 
  width: 100%; 
  padding-top: 16px;
  & p {
    font-size: 20px;
    font-weight: 600;
    color: #170c3a;
    letter-spacing: 0.48px;
  }  
`
export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px; 

  ${PrimaryButton} {
    padding: 0 24px;
    & span {
      padding-right: 8px;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    ${Checkbox} {
      margin-left: 16px;
    }
  }
  & > div > div {
    position: relative;
    ${Input} {
      line-height: 50px;
      padding: 0 44px;
    }
  }
  & > div > div > span {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    padding-left: 16px;
    display: flex;
    align-items: center;
    & img {        
      height: 15px;
      width: 15px;
    }
  }
`
export const ToolList = styled.ul`  
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  & li {
    margin: 16px 0;
    padding: 16px;
    background: #fff;
    border-radius: 5px;
  }
  & li > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & li > div > a {
    text-decoration: underline;
    color: #365DF0;
    font-size: 18px;
    font-weight: 600;
    transition: color 0.5s;        
    &:hover {
      color: #244AA8;
    }
  }
  & li > div > button {
    height: 35px;
    background: none;
    border: 0;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.36px;
    color: #fcaeac;
    transition: color 0.5s;
    &:hover {
      color: #F95E5A ;
    }
  }
  & li > div > button > span {
    padding-right: 8px;
  }
  & li > p {
    color: #170c3a;
    font-size: 16px;
  }
  & li > span {
    margin-top: 8px;
    font-weight: 600;
  }
`