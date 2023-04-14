import React from 'react';
import {ColorPicker} from '../components/Melody/src/components/Inputs/ColorPicker';

export default {
  title: 'Inputs/Melody Color Picker',
  component: ColorPicker,
  argTypes: {

  },
};

const Template = (args) => <ColorPicker {...args} />;

export const ColorPickerTemplate = Template.bind({});
ColorPickerTemplate.args = {
  value: '#FFFFFF',
  onChange: (color) => console.log(color)
}