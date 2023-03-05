import React from 'react';
import {TextArea} from "../components/Melody/src/components/Inputs/TextArea";

export default {
  title: 'Inputs/Melody Text Area',
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <TextArea {...args} />;

export const TextAreaTemplate = Template.bind({});
TextAreaTemplate.args = {
  variant: "primary",
  size: 'medium',
  label: {
    size: 'medium',
    label: 'Text Area',
    required: true,
    bold: true
  },
  value: 'test'
}