import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs'

import { Loading } from '../'
import { sizeKnob } from '../utils/stories'

storiesOf('Loading', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div className="h-screen -m-8">
      <Loading size={sizeKnob()} inline={boolean('Inline', false)} />
    </div>
  ))
