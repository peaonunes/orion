import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'

import { Form, Input } from '../../components'

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const error = boolean('error', false)
    const warning = boolean('warning', false)
    const small = boolean('small', false)
    const disabled = boolean('disabled', false)
    return (
      <Input
        placeholder="Input placeholder"
        warning={warning}
        error={error}
        small={small}
        disabled={disabled}
      />
    )
  })
