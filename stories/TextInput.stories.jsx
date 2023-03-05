import React from 'react';
import {TextInput} from "../components/Melody/src/components/Inputs/TextInput";

export default {
  title: 'Inputs/Melody Text Input',
  component: TextInput,
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

const Template = (args) => <TextInput {...args} />;

export const InputTemplate = Template.bind({});
InputTemplate.args = {
  // icon: {
  //   icon: 'melody-label'
  // },
  variant: "primary",
  size: 'medium',
  label: {
    size: 'medium',
    label: 'Text Input',
    required: true,
    bold: true
  },
  value: 'test'
}
export const FormGroupTemplate = Template.bind({});
FormGroupTemplate.args = {
  variant: "primary",
  size: 'medium',
  label: {
    size: 'large',
    label: 'Form Groups'
  },
  value: 123,
  headerComponent: <p>https://</p>,
  trailerComponent: <p>test</p>
}