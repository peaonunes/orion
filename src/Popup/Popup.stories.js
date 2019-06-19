import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, optionsKnob, withKnobs } from '@storybook/addon-knobs'

import { Button, Popup } from '../'

storiesOf('Popup', module)
  .addDecorator(withKnobs)
  .add('regular', () => (
    <Popup
      basic
      trigger={<Button content="Open" />}
      content={text('Content', 'Hello Popup!')}
      on={optionsKnob(
        'On',
        { hover: 'hover', click: 'click', focus: 'focus' },
        'hover',
        { display: 'inline-radio' }
      )}
    />
  ))
