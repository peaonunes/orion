import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text, withKnobs } from '@storybook/addon-knobs'

import { Progress } from '../'
import { sizeKnob } from '../utils/stories'

storiesOf('Progress', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Progress
      color={text('Color', 'wave-500')}
      percent={number('Percent', 50)}
      size={sizeKnob()}
    />
  ))
