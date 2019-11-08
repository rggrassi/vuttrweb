import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 8px 16px;
  border-radius: 5px;
  background: #f95e5a;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.4ps;

  span {
    display: flex;
    align-items: center;
  }

  button {
    border: 0;
    background: transparent;
    vertical-align: middle;
  }
`
export const MessageContent = styled.div`
  padding: 8px 0;
  svg {
    margin-right: 8px;
  }
`
export const ActionContent = styled.div`
  display: flex;
  margin-left: auto;
`