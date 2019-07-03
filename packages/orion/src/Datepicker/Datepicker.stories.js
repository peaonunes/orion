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
  .add('basic', () => {
    return (
      <Datepicker numberOfMonths={number('Number of months', 1)} {...actions} />
    )
  })
  .add('2 months', () => {
    return <Datepicker numberOfMonths={2} {...actions} />
  })
