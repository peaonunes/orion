import cx from 'classnames'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { Button, ClickOutside, Popup } from '../'

const Filter = ({
  applyButton,
  clearButton,
  children,
  className,
  initialValue,
  onClear,
  onApply,
  selectedText,
  text,
  value: propValue,
  ...otherProps
}) => {
  const [open, setOpen] = useState(false)
  const [stateValue, setValue] = useState(initialValue)

  const value = propValue || stateValue

  const [localValue, setLocalValue] = useState(value)

  const isSelected = !isNil(value)
  const isPristine =
    (isEmpty(value) && isEmpty(localValue)) || isEqual(value, localValue)

  const handleApply = () => {
    setValue(localValue)
    onApply && onApply(localValue)
    setOpen(false)
  }

  const handleClear = () => {
    setLocalValue(value)
    onClear && onClear()
  }

  const triggerClasses = cx('filter-trigger', {
    active: open,
    selected: isSelected
  })
  const trigger = (
    <div className={triggerClasses} onClick={() => setOpen(!open)}>
      {isSelected ? selectedText(value) : text}
    </div>
  )

  return (
    <Popup
      className={cx(className, 'ui filter')}
      basic
      trigger={trigger}
      open={open}
      {...otherProps}>
      <ClickOutside onClickOutside={handleApply}>
        <div className="filter-content">
          {open && children({ onChange: setLocalValue, value: localValue })}
        </div>
        <div className="filter-buttons">
          <div className={cx({ invisible: isPristine })}>
            {Button.create(clearButton, {
              autoGenerateKey: false,
              defaultProps: {
                subtle: true,
                type: 'button',
                onClick: handleClear
              }
            })}
          </div>
          {Button.create(applyButton, {
            autoGenerateKey: false,
            defaultProps: {
              primary: true,
              subtle: true,
              type: 'submit',
              onClick: handleApply
            }
          })}
        </div>
      </ClickOutside>
    </Popup>
  )
}

Filter.propTypes = {
  applyButton: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  clearButton: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  initialValue: PropTypes.any,
  onClear: PropTypes.func,
  onApply: PropTypes.func,
  selectedText: PropTypes.func,
  text: PropTypes.string.isRequired,
  value: PropTypes.any
}

Filter.defaultProps = {
  applyButton: 'Apply',
  clearButton: 'Clear',
  selectedText: value => value
}

export default Filter
