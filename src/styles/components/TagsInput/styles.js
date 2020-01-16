import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #f5f4f6;
  border: 1px solid #dedce1;
  border-radius: 5px;
  & ul {
    display: flex;
    flex-wrap: wrap;    
  }
  & input {
    border: none;
    flex: 1;
  }
`