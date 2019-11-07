import React from "react";
import PropTypes from 'prop-types';
import { MdClose, MdError } from 'react-icons/md';
import { Container } from './styles';

export default function ContextBanner({ message }) {
  return ( 
    <Container>
      <div>
        <span>
          <MdError color='#fff' size={20}/>
          Wrong credentials
        </span>
      </div>  
      <div>
        <button>
          <span>
            <MdClose color='#fff' size={12}/>
          </span>
        </button>
      </div>
    </Container>
  );
}

ContextBanner.propTypes = {
  message: PropTypes.string.isRequired
}