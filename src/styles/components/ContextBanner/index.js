import React from "react";
import PropTypes from 'prop-types';
import { MdClose, MdInfo } from 'react-icons/md';
import { Container, MessageContent, ActionContent, Types } from './styles';

export default function ContextBanner({ message, type }) {
  return ( 
    <Container type={type}>
      <MessageContent>
        <span>
          <MdInfo color='#fff' size={20}/>
          {message}
        </span>
      </MessageContent>  
      <ActionContent>
        <button>
          <span>
            <MdClose color='#fff' size={12}/>
          </span>
        </button>
      </ActionContent>
    </Container>
  );
}

ContextBanner.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(Types)).isRequired
}

ContextBanner.defaultProps = {
  message: '',
}