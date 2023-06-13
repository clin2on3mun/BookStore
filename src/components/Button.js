import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, clickHandler }) => <button type="button" onClick={clickHandler}>{title}</button>;

Button.propTypes = {
  title: PropTypes.string,
  clickHandler: PropTypes.func,
};
Button.defaultProps = {
  title: null,
  clickHandler: null,
};
export default Button;
