import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`
export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 530px;
  width: 500px;

  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 20px 25px #0000001A;
`