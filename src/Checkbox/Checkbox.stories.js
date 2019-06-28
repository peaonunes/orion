import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'

import { Checkbox } from '../'

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('regular', () => (
    <React.Fragment>
      <Checkbox
        label={text('Label', 'Click Me')}
        defaultChecked
        indeterminate={boolean('Indeterminate', false)}
        disabled={boolean('Disabled', false)}
      />
    </React.Fragment>
  ))
  .add('multiple', () => (
    <React.Fragment>
      <Checkbox label="First" />
      <Checkbox label="Second" />
      <Checkbox label="Third" />
    </React.Fragment>
  ))
