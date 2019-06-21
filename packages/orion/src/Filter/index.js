import cx from 'classnames'
import keyboardKey from 'keyboard-key'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
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

  const isSelected = !isEmpty(value)
  const isPristine =
    (isEmpty(value) && isEmpty(localValue)) || isEqual(value, localValue)

  const handleApply = event => {
    setValue(localValue)
    onApply && onApply(localValue)
    setOpen(false)

    // Prevent form submission.
    event.preventDefault()
  }

  const handleClear = () => {
    setLocalValue(value)
    onClear && onClear()
  }

  const handleKeyDown = event => {
    if (keyboardKey.getCode(event) === keyboardKey.Escape) {
      handleApply(event)
    }
  }

  const triggerClasses = cx('filter-trigger', {
    active: open,
    selected: isSelected
  })
  const trigger = (
    <Button className={triggerClasses} onClick={() => setOpen(!open)}>
      {isSelected ? selectedText(value) : text}
    </Button>
  )

  return (
    <Popup
      className={cx(className, 'ui filter')}
      basic
      trigger={trigger}
      open={open}
      {...otherProps}>
      <ClickOutside
        as="form"
        onClickOutside={handleApply}
        onKeyDown={handleKeyDown}
        onSubmit={handleApply}>
        <div className="filter-content">
          {children({ onChange: setLocalValue, value: localValue })}
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
              type: 'submit'
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