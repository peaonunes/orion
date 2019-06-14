import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs'

import Input from './'

const sizeKnob = () =>
  radios('size', { Default: 'default', Small: 'small' }, 'default')

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
