import styled from 'styled-components';

export const Container = styled.div`
  & label {
    display: block;
    font-size: 18px;
    margin-bottom: 4px;
  }
  & div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: #f5f4f6;
    border: 1px solid #dedce1;
    border-radius: 5px;
    padding: 0 8px;
    :focus-within {
      background: #ebeaed; 
    }
  }
  & div > ul {
    display: flex;
    flex-wrap: wrap;    
  }
  & div > ul > li {
    display: flex;
    align-items: center;
    justify-content: center;  
    background: #fff;
    border: 1px solid #ebeaed;
    border-radius: 5px;    
    padding: 8px;
    margin: 8px 8px 8px 0px;
  }
  & div > ul > li:first-of-type {
    margin-left: 0px;
  }
  & div > ul > li:last-of-type {
    margin-right: 0px;
  }
  & div > ul > li > span:last-of-type {
    width: 16px;
    line-height: 16px;
    text-align: center;
    margin-left: 8px;
    cursor: pointer;
    color: #c7c4cd;
  }
  & div > ul > li > span:last-of-type:hover {
    color: inherit;
    transition: color 0.3s;
  }

  && input {
    border: none;
    flex: 1;
    margin-bottom: 0;
    padding: 0 4px;
    min-width: 300px;
  }
`