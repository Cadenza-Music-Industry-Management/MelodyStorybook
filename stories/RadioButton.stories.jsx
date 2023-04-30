import React from 'react';
import {RadioButton} from '../components/Melody/src/components/Inputs/RadioButton';

export default {
  title: 'Inputs/Melody Radio Button',
  component: RadioButton,
  argTypes: {
    value: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <RadioButton {...args} />;

export const RadioButtonTemplate = Template.bind({});
RadioButtonTemplate.args = {
  variant: 'primary',
  size: 'medium',
  label: 'Top label',
  subLabel: 'This is the sub label',
  handleChange: (checked) => console.log(checked)
}