import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import Input from './'
import { sizeKnob } from '../utils/stories'

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const error = boolean('error', false)
    const warning = boolean('warning', false)
    const disabled = boolean('disabled', false)
    return (
      <Input
        placeholder="Input placeholder"
        warning={warning}
        error={error}
        size={sizeKnob()}
        disabled={disabled}
        fluid={boolean('fluid', false)}
        icon={text('Icon')}
      />
    )
  })
