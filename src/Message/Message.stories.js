import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import Message from './'

storiesOf('Message', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Message
      content={text('Content', 'Your account was created')}
      header={text('Header', 'Success')}
      error={boolean('Error', false)}
      success={boolean('Success', false)}
      warning={boolean('Warning', false)}
    />
  ))
