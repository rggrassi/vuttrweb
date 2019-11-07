import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';
import { FaSpinner } from 'react-icons/fa';

export default function SubmitButton({ loading, caption }) {
  return (
    <Button type="submit" disabled={loading}>
      {loading ? <FaSpinner color="#fff" size={22} /> : caption}
    </Button>
  );
}

SubmitButton.propTypes = {
  caption: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

SubmitButton.defaultProps = {
  loading: false
};