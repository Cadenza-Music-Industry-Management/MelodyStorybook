import React from 'react';
import {Accordion} from '../components/Melody/src/components/Layouts/Accordion';

export default {
  title: 'Layout/Melody Accordion',
  component: Accordion,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Accordion {...args}>
  <h1>test</h1>
</Accordion>;

export const AccordionTemplate = Template.bind({});
AccordionTemplate.args = {
  size: 'medium'
}

//TODO typescript example
// import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
// const meta: Meta<typeof Button> = {
//   title: 'Example/Button',
//   component: Button,
//   tags: ['autodocs'],
//   argTypes: {
//     backgroundColor: {
//       control: 'color',
//     },
//   },
// };

// export default meta;
// type Story = StoryObj<typeof Button>;