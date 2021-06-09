import React from 'react';
import StyledUnderLineInput from "./UnderLineInput.styles";

export const UnderLineInput = ({value, onChange, type, placeholder}) => {
    return (<StyledUnderLineInput value={value} onChange={onChange} type={type} placeholder={placeholder}/>);
};

UnderLineInput.propTypes = {};

UnderLineInput.defaultProps = {};