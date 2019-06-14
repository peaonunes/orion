import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Dropdown as SemanticDropdown } from 'semantic-ui-react'

const Sizes = {
  DEFAULT: '',
  SMALL: 'small'
}

const DROPDOWN_ICON = {
  className: 'orion-dropdown__icon',
  name: 'keyboard_arrow_down'
}

const Dropdown = ({ className, size, ...otherProps }) => {
  const { disabled } = otherProps
  const classes = cx(
    className,
    'orion-dropdown',
    'inline-flex items-center justify-between relative outline-none',
    'border border-gray-900-24 px-16 rounded',
    {
      'h-48': size === Sizes.DEFAULT,
      'h-32': size === Sizes.SMALL,
      'bg-white cursor-pointer hover:shadow-field-hover focus:shadow-field-focus': !disabled,
      'bg-gray-900-8 cursor-default': disabled
    }
  )
  return (
    <SemanticDropdown
      className={classes}
      icon={DROPDOWN_ICON}
      {...otherProps}
    />
  )
}

Dropdown.propTypes = {
  size: PropTypes.oneOf([Sizes.DEFAULT, Sizes.SMALL])
}

Dropdown.defaultProps = {
  size: Sizes.DEFAULT
}

export default Dropdown
