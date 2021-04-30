import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({label, href, onClick}) => {
    if (!href) return (<button onClick={onClick}>{label}</button>);
    return <a href={href}>{label}</a>
};

Button.propTypes = {
    label: PropTypes.node.isRequired,
    href:PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {};
