import React from 'react';
import {Avatar} from '../components/Melody/src/components/Layouts/Avatar';

export default {
  title: 'Layout/Melody Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    image: {
      control: { type: 'text' }
    },
    rounded: {
      control: { type: 'boolean' }
    },
    ring: {
      control: { type: 'boolean' }
    }
  },
};

const Template = (args) => <Avatar {...args} />;

export const PlaceholderAvatarTemplate = Template.bind({});
PlaceholderAvatarTemplate.args = {
  size: 'medium'
}

//TODO need image example component here