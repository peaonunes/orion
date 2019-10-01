import React from 'react'
import { number, text, withKnobs } from '@storybook/addon-knobs'

import { Progress } from '../'
import { sizeKnob } from '../utils/stories'

export default {
  title: 'Progress',
  decorators: [withKnobs]
}

export const basic = () => (
  <Progress
    color={text('Color', 'wave-500')}
    percent={number('Percent', 50)}
    size={sizeKnob()}
  />
)
