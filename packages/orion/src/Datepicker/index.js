import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { DayPickerSingleDateController } from 'react-dates'

import ReactDatesDatepicker from './ReactDatesDatepicker'

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
    <ReactDatesDatepicker
      as={DayPickerSingleDateController}
      date={date}
      onDateChange={handleChange}
      {...otherProps}
    />
  )
}

Datepicker.propTypes = {
  defaultDate: PropTypes.any
}

export default Datepicker
