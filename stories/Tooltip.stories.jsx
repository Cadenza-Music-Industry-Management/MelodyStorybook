import React from 'react';
import {Tooltip} from "../components/Melody/src/components/Layouts/Tooltip";
import {Button} from "../components/Melody/src/components/Inputs/Button";

export default {
  title: 'Layout/Melody Tooltip',
  component: Tooltip,
  argTypes: {

  },
};

const Template = (args) => <Tooltip {...args}>
  <Button label={'Button'} />
</Tooltip>;

export const TooltipTemplate = Template.bind({});
TooltipTemplate.args = {
  message: 'This is to test a longer message for your tooltip. It could even be two sentences!'
}