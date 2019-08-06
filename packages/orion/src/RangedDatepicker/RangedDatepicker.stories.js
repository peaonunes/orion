import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, withKnobs, text } from '@storybook/addon-knobs'

import { RangedDatepicker } from '../'

export const actions = {
  onDatesChange: action('onDatesChange')
}

storiesOf('RangedDatepicker', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const startDate = text('Start Date') || null
    const endDate = text('End Date') || null
    return (
      <RangedDatepicker
        numberOfMonths={number('Number of months', 1)}
        dates={startDate || endDate ? { startDate, endDate } : null}
        {...actions}
      />
    )
  })
  .add('2 months', () => {
    return <RangedDatepicker numberOfMonths={2} {...actions} />
  })
