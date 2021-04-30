import React from 'react';

import Button, {SearchButton} from './Button';
import {items} from './Button-data.json'

const buttonClicked = e => {
  e.preventDefault();
  alert("Hello");
};

export default {
  title: '1.atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const loginButton = Template.bind({});
loginButton.args = {
  label: "로그인"
};

export const secondaryButton = Template.bind({});
secondaryButton.args = {
  variant: "secondary",
  label: "secondary Button"
};

export const functionButton = Template.bind({});
functionButton.args = {
  label: "function Button",
  onClick: buttonClicked
};

export const linkedButton = Template.bind({});
linkedButton.args = {
  label: "linked Button",
  href: "/route"
};

export const filterButton = Template.bind({});
filterButton.args = {
  label: "정렬: 추천순",
  items: items
};

const searchButtonTemplate = (args) => <SearchButton {...args} />;
export const searchButton = searchButtonTemplate.bind({});
searchButton.args = {
  text: "검색",
};