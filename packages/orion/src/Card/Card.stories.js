import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs/react'

import { Card } from '../'

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('regular', () => (
    <React.Fragment>
      <Card header={text('Header', 'Header Title')} />
    </React.Fragment>
  ))
