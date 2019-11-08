import React from "react";
import PropTypes from 'prop-types';
import { MdClose, MdError } from 'react-icons/md';
import { Container, MessageContent, ActionContent } from './styles';

export default function ContextBanner({ message }) {
  return ( 
    <Container className='context-banner'>
      <MessageContent>
        <span>
          <MdError color='#fff' size={20}/>
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
  message: PropTypes.string.isRequired
}