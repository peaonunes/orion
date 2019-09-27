import moment from 'moment'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, withKnobs } from '@storybook/addon-knobs'

import { Datepicker } from '../'

export const actions = {
  onDateChange: action('onDateChange')
}

storiesOf('Datepicker', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    return (
      <Datepicker numberOfMonths={number('Number of months', 1)} {...actions} />
    )
  })
  .add('2 months', () => {
    return <Datepicker numberOfMonths={2} {...actions} />
  })
  .add('Disabled dates', () => {
    const isDayBlocked = date => {
      const dayOfWeek = date.format('dddd')
      return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'
    }
    return <Datepicker isDayBlocked={isDayBlocked} {...actions} />
  })
