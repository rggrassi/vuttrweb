import styled from 'styled-components';
import { PrimaryButton } from '../../styles/components/PrimaryButton/styles';

export const Header = styled.div`
  margin: 16px 0 24px 0; 
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
  ${PrimaryButton} {
    padding: 0 24px 0 48px;
    position: relative;
    span:first-of-type {
      position: absolute;
      left: 24px;
      top: 50%;
      width: 12px;
      height: 0px;
      border: solid white;
      border-width: 0px 0 2px 0px;
    }
    span:last-of-type {
      position: absolute;
      left: 29px;
      top: calc(50% - 5px);
      width: 2px;
      height: 12px;
      border: solid white;
      border-width: 0px 2px 0px 0px;
    }
  }  
`
export const Search = styled.div`
  display: flex;
  align-items: center;
  
  div {
    position: relative;
    input[type=text] {
      height: 50px;
      line-height: 50px;
      font-size: 20px;    
      padding: 0 44px;
      letter-spacing: 0.4px;
      background: #f5f4f6; 
      color: #b1adb9;
      border: 1px solid #ebeaed;
      border-radius: 5px;    
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

  label {
    display: block;
    margin-left: 8px;
    position: relative;
    padding-left: 20px;
    cursor: pointer;

    /* Hide the browser's default checkbox */
    input {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    span {
      position: absolute;
      top: 4px;
      left: 0;
      height: 15px;
      width: 15px;
      background: #f5f4f6;
      border-radius: 2px;
    }

    /* When the checkbox is checked, add a blue background */
    input:checked + span {
      background: #365df0;
      border-radius: 2px;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    span:after {
      content: '';
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    input:checked + span:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    span:after {
      content: '';
      position: absolute;
      display: none;

      left: 2px;
      top: 3px;
      width: 10px;
      height: 4px;
      border: solid white;
      border-width: 2px 2px 0 0;
      transform: rotate(125deg);
    }
  }
`