import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
`
export const Backdrop = styled.div`
  opacity: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  position: fixed;
  background: #000;  
  opacity: 0.7;
`
export const ModalContainer = styled.div.attrs(() => ({
  id: 'modal-container'
}))`
  height: 100%;  
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`
export const DialogContainer = styled.div`
  min-width: 400px;  
  min-height: 60px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 20px 25px #0000001A;
  overflow: auto;  
`