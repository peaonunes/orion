import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { DayPickerRangeController } from 'react-dates'

import 'react-dates/initialize'

import Button from '../Button'

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
    <DayPickerRangeController
      startDate={_.get(dates, 'startDate')}
      endDate={_.get(dates, 'endDate')}
      onDatesChange={handleDatesChange}
      focusedInput={focusedInput || 'startDate'}
      onFocusChange={handleFocusChange}
      hideKeyboardShortcutsPanel
      horizontalMonthPadding={15}
      daySize={40}
      navPrev={<Button icon="keyboard_arrow_left" />}
      navNext={<Button icon="keyboard_arrow_right" />}
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
