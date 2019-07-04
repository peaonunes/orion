import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { Loading } from '../'

storiesOf('Loading', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Loading />
  })
  .add('small', () => {
    return <Loading size="small" />
  })
