import React from 'react';
import {string} from 'prop-types';
import StyledInputText, {StyledSearchBar} from "./InputText.styles";
import {SearchButton} from "../Button/Button";

export const InputText = ({type, placeholder, value, onChange}) => {
    return (<StyledInputText value={value} onChange={onChange} type={type} placeholder={placeholder}/>);
};

InputText.propTypes = {
    type: string,
    placeholder: string
};

InputText.defaultProps = {
    type: "text",
    placeholder: "hello world!!!"
};

export const SearchBar = ({value, text, onChange, onClick, onKeyPress}) => {
    return (<StyledSearchBar>
        <input type="text" onKeyPress={onKeyPress} value={value} placeholder={text} onChange={onChange}/>
        <SearchButton text={"검색"} onClick={onClick}/>
    </StyledSearchBar>);
};