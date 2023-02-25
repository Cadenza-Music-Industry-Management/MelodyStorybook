import React from 'react';
import {Badge} from '../Melody/src/components/Layouts/Badge';

export default {
  title: 'Layout/Melody Badge',
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select', options: ['info', 'alert', 'okay', 'caution', 'dark', 'light'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Badge {...args} />;

export const BadgeTemplate = Template.bind({});
BadgeTemplate.args = {
  variant: "info",
  size: 'medium',
  text: 'Badge'
}

export const BadgeIndicatorTemplate = Template.bind({});
BadgeIndicatorTemplate.args = {
  variant: "info",
  size: 'medium',
  text: 'Badge',
  indicator: {
    variant: "info",
    size: 'medium',
    animated: false
  }
}