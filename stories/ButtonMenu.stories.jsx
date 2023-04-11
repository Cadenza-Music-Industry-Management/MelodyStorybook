import React from 'react';
import {ButtonMenu} from '../components/Melody/src/components/Inputs/ButtonMenu';
import {Button} from "../components/Melody/src/components/Inputs/Button";

export default {
  title: 'Inputs/Melody Button Menu',
  component: ButtonMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // variant: {
    //   control: { type: 'select', options: ['info', 'alert', 'okay', 'caution', 'dark', 'light'] }
    // },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <div className={"melody-float-right"}>
  <ButtonMenu {...args} />
</div>;

export const ButtonMenuTemplate = Template.bind({});
ButtonMenuTemplate.args = {
  label: "Menu",
  size: 'medium',
  buttonContents: <Button label={"test"} color={"secondary"} />,
  items: [
    {
      name: 'Profile'
    }
  ]
}