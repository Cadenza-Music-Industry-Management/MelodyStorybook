import React from 'react';
import {Label} from "../Melody/src/components/Layouts/Label";

export default {
  title: 'Layout/Melody Label',
  component: Label,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: true
    },
    bold: {
      control: { type: 'boolean' },
      defaultValue: true
    }
  },
};

const Template = (args) => <Label {...args} />;

export const LabelTemplate = Template.bind({});
LabelTemplate.args = {
  size: 'medium',
  label: 'Label'
}