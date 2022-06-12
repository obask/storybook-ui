import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Ololo } from './Ololo';

export default {
  title: 'Example/Ololo',
  component: Ololo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Ololo>;

const Template: ComponentStory<typeof Ololo> = (args) => <Ololo {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    name: 'Not Sure',
  },
};
