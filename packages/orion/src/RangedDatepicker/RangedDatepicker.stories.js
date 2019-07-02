import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, withKnobs } from '@storybook/addon-knobs'

import { RangedDatepicker } from '../'

export const actions = {
  onDatesChange: action('onDatesChange')
}

storiesOf('RangedDatepicker', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <RangedDatepicker
        numberOfMonths={number('Number of months', 1)}
        {...actions}
      />
    )
  })
  .add('2 months', () => {
    return <RangedDatepicker numberOfMonths={2} {...actions} />
  })
