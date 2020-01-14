import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Profile from '../../../styles/components/Profile';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Profile/>
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}