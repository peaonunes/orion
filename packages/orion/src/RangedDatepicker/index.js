import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { DayPickerRangeController } from 'react-dates'

import ReactDatesDatepicker from '../Datepicker/ReactDatesDatepicker'

const RangedDatepicker = ({
  dates: dateProp,
  defaultDates,
  focusedInput: focusedInputProp,
  onDatesChange,
  onFocusChange,
  ...otherProps
}) => {
  const [datesState, setDates] = useState(defaultDates)
  const handleDatesChange = newDates => {
    setDates(newDates)
    onDatesChange && onDatesChange(newDates)
  }
  const dates = dateProp || datesState

  const [focusedInputState, setFocusedInput] = useState()
  const focusedInput = focusedInputProp || focusedInputState
  const handleFocusChange = newFocusedInput => {
    setFocusedInput(newFocusedInput)
    onFocusChange && onFocusChange(newDates)
  }

  return (
    <ReactDatesDatepicker
      as={DayPickerRangeController}
      startDate={_.get(dates, 'startDate')}
      endDate={_.get(dates, 'endDate')}
      onDatesChange={handleDatesChange}
      focusedInput={focusedInput || 'startDate'}
      onFocusChange={handleFocusChange}
      {...otherProps}
    />
  )
}

RangedDatepicker.propTypes = {
  dates: PropTypes.shape({
    startDate: PropTypes.any,
    endDate: PropTypes.any
  }),
  defaultDates: PropTypes.shape({
    startDate: PropTypes.any,
    endDate: PropTypes.any
  })
}

export default RangedDatepicker
