import React from 'react';
import {string} from 'prop-types';
import StyledInputText, {StyledSearchBar} from "./InputText.styles";
import {SearchButton} from "../Button/Button";

export const InputText = ({type, placeholder}) => {
    return (<StyledInputText type={type} placeholder={placeholder}/>);
};

InputText.propTypes = {
    type: string,
    placeholder: string
};

InputText.defaultProps = {
    type: "text",
    placeholder: "hello world!!!"
};

export const SearchBar = ({value, text, onChange}) => {
    return (<StyledSearchBar>
        <input type="text" value={value} placeholder={text} onChange={onChange}/>
        <SearchButton text={"검색"}/>
    </StyledSearchBar>);
};