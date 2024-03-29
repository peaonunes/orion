import cx from 'classnames'
import keyboardKey from 'keyboard-key'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { Button, ClickOutside, Popup } from '../'

const Filter = ({
  applyButton,
  clearButton,
  children,
  className,
  extraFooterContent,
  initialValue,
  onApply,
  onChange,
  onClear,
  onClose,
  onOpen,
  selectedText,
  text,
  value: propValue,
  ...otherProps
}) => {
  const [open, setOpen] = useState(false)
  const [stateValue, setValue] = useState(initialValue)

  const value = propValue || stateValue

  const [localValue, setLocalValue] = useState(value)

  const isSelected = !_.isEmpty(value)

  const handleApply = event => {
    setValue(localValue)
    onApply && onApply(localValue)

    setOpen(false)
    onClose && onClose()

    // Prevent form submission.
    event.preventDefault()
  }

  const handleClear = () => {
    setLocalValue(null)
    onChange && onChange(null)
    onClear && onClear()
  }

  const handleKeyDown = event => {
    if (keyboardKey.getCode(event) === keyboardKey.Escape) {
      handleApply(event)
    }
  }

  const handleChange = newLocalValue => {
    setLocalValue(newLocalValue)
    onChange && onChange(newLocalValue)
  }

  const handleTriggerClick = () => {
    if (open) {
      onClose && onClose()
    } else {
      setLocalValue(value)
      onOpen && onOpen()
    }
    setOpen(!open)
  }

  const triggerClasses = cx('filter-trigger', {
    active: open,
    selected: isSelected
  })
  const trigger = (
    <Button className={triggerClasses} onClick={handleTriggerClick}>
      {isSelected ? selectedText(value) : text}
    </Button>
  )

  return (
    <Popup
      className={cx(className, 'orion filter')}
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
          {children({ onChange: handleChange, value: localValue })}
        </div>
        <div className="filter-buttons">
          <div className={cx({ invisible: _.isEmpty(localValue) })}>
            {Button.create(clearButton, {
              autoGenerateKey: false,
              defaultProps: {
                subtle: true,
                type: 'button',
                onClick: handleClear
              }
            })}
          </div>
          <div className="flex items-baseline">
            {extraFooterContent && (
              <div className="filter-footer-content">{extraFooterContent}</div>
            )}
            {Button.create(applyButton, {
              autoGenerateKey: false,
              defaultProps: {
                primary: true,
                subtle: true,
                type: 'submit'
              }
            })}
          </div>
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
  extraFooterContent: PropTypes.node,
  initialValue: PropTypes.any,
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onOpen: PropTypes.func,
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
