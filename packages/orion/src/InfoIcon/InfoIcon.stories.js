import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { InfoIcon } from '../'

storiesOf('InfoIcon', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <div className="mt-24">
      <InfoIcon content={text('Content', 'Some info text here.')} />
    </div>
  ))
