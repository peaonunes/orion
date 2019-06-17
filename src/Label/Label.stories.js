import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'

import Label from './'
import { sizeKnob } from '../utils/stories'

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Label
      content={text('Text', 'Label text')}
      icon={text('Icon')}
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
