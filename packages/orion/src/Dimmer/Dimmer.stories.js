import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs/react'

import { Button, Dimmer } from '../'

storiesOf('Dimmer', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <div className="h-screen -m-8 p-24">
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          repudiandae a provident, temporibus doloremque voluptatibus, officia
          corporis soluta dolores porro nihil quisquam veniam! Reprehenderit,
          adipisci! Dolorum aspernatur laborum sapiente aliquid.
        </div>
        <div className="py-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          repudiandae a provident, temporibus doloremque voluptatibus, officia
          corporis soluta dolores porro nihil quisquam veniam! Reprehenderit,
          adipisci! Dolorum aspernatur laborum sapiente aliquid.
        </div>
        <Button primary>Lorem Lorem</Button>
        <Dimmer active={boolean('Active', true)} />
      </div>
    )
  })
