import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, radios, withKnobs } from '@storybook/addon-knobs'

import { Input } from '../../components'

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const error = boolean('error', false)
    const warning = boolean('warning', false)
    const size = radios('size', { default: '', small: 'small' }, '')
    const disabled = boolean('disabled', false)
    return (
      <Input
        placeholder="Input placeholder"
        warning={warning}
        error={error}
        size={size}
        disabled={disabled}
      />
    )
  })
