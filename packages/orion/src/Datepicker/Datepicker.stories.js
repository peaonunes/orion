import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Datepicker } from '../'

export const actions = {
  onDateChange: action('onDateChange')
}

storiesOf('Datepicker', module).add('basic', () => {
  return <Datepicker {...actions} />
})
