import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Button(props) {
  return (
    <button className="button" disabled={props.loading} onClick={props.onClick}>
      {props.loading ? "Loading ..." : props.children}
    </button>
  );
}

Button.defaultProps = {
  loading: false
}

Button.propTypes = {
  loading: PropTypes.bool
}

export default Button
