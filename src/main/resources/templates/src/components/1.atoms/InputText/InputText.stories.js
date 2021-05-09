import React from 'react';
import {InputText, SearchBar} from './InputText';
import {UnderLineInput} from "./UnderLineInput/UnderLineInput";

export default {
    title: '1.atoms/InputText',
    component: InputText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <InputText {...args} />;

export const loginInput = Template.bind({});
loginInput.args = {
    placeholder:"아이디"
};

const searchBarTemplate = (args) => <SearchBar {...args} />;

export const searchBar = searchBarTemplate.bind({});
searchBar.args = {
    text : "종목 입력"
};

const underLineTemplate = (args) => <UnderLineInput {...args} />;

export const underLine = underLineTemplate.bind({});
underLine.args = {
    placeholder : "아이디를 입력하세요"
};