import React from 'react';
import {FormListLayout} from '../components/Melody/src/components/Sections/FormListLayout';

export default {
  title: 'Section/Melody Form List Layout',
  component: FormListLayout,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <FormListLayout {...args} />;

export const FormListLayoutTemplate = Template.bind({});
FormListLayoutTemplate.args = {
  label: "Title here",
  subLabel: 'This is where the sub title info would go',
  items: [
    {
      key: <p>Test</p>,
      value: <p>Test 2</p>
    }
  ]
}