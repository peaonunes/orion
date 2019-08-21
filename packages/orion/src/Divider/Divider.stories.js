import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import { Divider } from '../'

storiesOf('Divider', module)
  .addDecorator(withKnobs)
  .add('Alone', () => {
    return <Divider />
  })
  .add('Within content', () => {
    return (
      <div className="text-center w-384">
        Text at top
        <Divider />
        Text at bottom
      </div>
    )
  })
