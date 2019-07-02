import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { DayPickerSingleDateController } from 'react-dates'

import 'react-dates/initialize'

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
      {...otherProps}
    />
  )
}

Datepicker.propTypes = {
  defaultDate: PropTypes.any
}

export default Datepicker
