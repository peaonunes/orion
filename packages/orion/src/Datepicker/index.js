import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { DayPickerSingleDateController } from 'react-dates'

import 'react-dates/initialize'

import Button from '../Button'

const Datepicker = ({
  date: dateProp,
  defaultDate,
  onDateChange,
  ...otherProps
}) => {
  const [dateState, setDate] = useState(defaultDate)
  const handleChange = newDate => {
    setDate(newDate)
    onDateChange && onDateChange(newDate)
  }

  const date = dateProp || dateState
  return (
    <DayPickerSingleDateController
      date={date}
      onDateChange={handleChange}
      hideKeyboardShortcutsPanel
      horizontalMonthPadding={15}
      daySize={40}
      navPrev={<Button icon="keyboard_arrow_left" />}
      navNext={<Button icon="keyboard_arrow_right" />}
      {...otherProps}
    />
  )
}

Datepicker.propTypes = {
  defaultDate: PropTypes.any
}

export default Datepicker
