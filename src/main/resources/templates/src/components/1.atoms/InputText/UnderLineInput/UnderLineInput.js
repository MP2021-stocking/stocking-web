import React from 'react';
import StyledUnderLineInput from "./UnderLineInput.styles";

export const UnderLineInput = ({type, placeholder}) => {
    return (<StyledUnderLineInput type={type} placeholder={placeholder}/>);
};

UnderLineInput.propTypes = {};

UnderLineInput.defaultProps = {};