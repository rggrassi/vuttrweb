import styled from 'styled-components';

export const Section = styled.div`
  background: #fff;
  padding: 0 30px;
`
export const Container = styled.div`
  height: 64px;
  margin: 0 auto;
  max-width: 960px;
  width: 100%;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    strong {
      display: block;
      font-size: 18px;
      letter-spacing: 0.36px;
      color: #170C3A;
    }
    
    a {
      display: block;
      margin-top: 2px;
      font-size: 16px;
      letter-spacing: 0.32px;
      color: #999;
    }
  }
`