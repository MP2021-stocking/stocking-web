import React from 'react';

import {Button} from './Button';

export default {
    title: 'atoms/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const buttonClicked = e=>{
  e.preventDefault();
  alert("hello");
}

const Template = (args) => <Button {...args} />;

export const basicButton = Template.bind({});
basicButton.args = {
    label: 'Basic Button',
};

export const functionButton = Template.bind({});
functionButton.args = {
  label: 'Function Button',
  onClick: buttonClicked
}

export const linkedButton = Template.bind({});
linkedButton.args = {
  label: 'Linked Button',
  href: "/route"
}