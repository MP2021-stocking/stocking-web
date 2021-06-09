import React from 'react';

import {Header} from './Header';
import {getHeaderData} from "../../../_actions/action";

let headerData = getHeaderData().payload

export default {
    title: '3.organisms/Header',
    component: Header,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Header {...args} />;

export const headerMain = Template.bind({});
headerMain.args = {
    items1: headerData.items_main,
    items2: headerData.items_login
};

export const headerLogin = Template.bind({});
headerLogin.args = {
    items1: [],
    items2: headerData.items_login
};

export const headerUserinfo = Template.bind({});
headerUserinfo.args = {
    items1: headerData.items_userinfo,
    items2: headerData.items_login
};
