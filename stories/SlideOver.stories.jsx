import React from 'react';
import {SlideOver} from '../components/Melody/src/components/Sections/SlideOver';

export default {
  title: 'Section/Melody Slide Over',
  component: SlideOver,
  argTypes: {

  }
};

const Template = (args) => <SlideOver {...args}>
  <h1>test</h1>
</SlideOver>;

export const SlideOverTemplate = Template.bind({});
SlideOverTemplate.args = {
  title: "Test",
  open: true,
  setOpen: (open) => {
    console.log(open)
  }
}