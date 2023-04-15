import {Breadcrumb} from '../components/Melody/src/components/Layouts/Breadcrumb';

export default {
  title: 'Layout/Melody Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    variant: {
      control: { type: 'select' }
    },
    size: {
      control: { type: 'select' }
    }
  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const BreadcrumbTemplate = Template.bind({});
BreadcrumbTemplate.args = {
  items: [
    {
      label: 'Home',
      icon: { icon: 'melody-home', additionalClasses: 'melody-w-6 melody-fill-white' }
    },
    {
      label: 'Test 1',
      icon: { icon: 'melody-none', rightAligned: true, additionalClasses: 'melody-w-6' }
    },
    {
      label: 'Test 2'
    }
  ]
}