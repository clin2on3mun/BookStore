import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, clickHandler, checkIt }) => <button type="button" onClick={clickHandler} className={checkIt}>{title}</button>;

Button.propTypes = {
  title: PropTypes.string,
  clickHandler: PropTypes.func,
  checkIt: PropTypes.string,
};
Button.defaultProps = {
  title: null,
  clickHandler: null,
  checkIt: null,
};
export default Button;
