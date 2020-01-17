import styled from 'styled-components';

export const Container = styled.div`
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 400px;  
  z-index: 2000;

  & > div {
    position: relative;
    max-width: 800px;
    min-height: 120px;  
    padding: 16px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 20px 25px #0000001A;
    opacity: ${props => props.open ? 1 : 0};
    transform: ${props => props.open ? `scale(1)` : `scale(0.5)`};
    transition: all 0.3s;
  }
`
export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(67, 64, 64, 0.5);
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  opacity: ${props => props.open ? 1 : 0};
  transition: all 0.3s;
`