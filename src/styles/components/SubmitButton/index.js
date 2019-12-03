import React from 'react';
import PropTypes from 'prop-types';
import { ButtonSuccess } from './styles';
import { FaSpinner } from 'react-icons/fa';

export default function SubmitButton({ loading, caption }) {
  return (
    <ButtonSuccess type="submit" disabled={loading}>
      {loading ? <FaSpinner color="#fff" size={22} /> : caption}
    </ButtonSuccess>
  );
}

SubmitButton.propTypes = {
  caption: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

SubmitButton.defaultProps = {
  loading: false
};