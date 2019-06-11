import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'

import { Checkbox } from '../../components'

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('regular', () => (
    <React.Fragment>
      <Checkbox
        label={text('Label', 'Click Me')}
        defaultChecked
        indeterminate={boolean('Indeterminate')}
        disabled={boolean('Disabled')}
      />
    </React.Fragment>
  ))
