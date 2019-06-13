import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { radios, text, withKnobs } from '@storybook/addon-knobs'

import Label from './'

const sizeKnob = () =>
  radios('size', { Default: 'default', Small: 'small' }, 'default')

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Label
      content={text('Text', 'Label text')}
      icon={text('icon')}
      size={sizeKnob()}
    />
  ))
  .add('removable', () => (
    <Label
      content={text('Text', 'Label text')}
      size={sizeKnob()}
      onRemove={action('onRemove')}
    />
  ))
