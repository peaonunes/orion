import cx from 'classnames'
import values from 'lodash/values'
import PropTypes from 'prop-types'
import React from 'react'
import { Dropdown as SemanticDropdown } from 'semantic-ui-react'

import { Sizes, sizePropType } from '../utils/sizes'
import DropdownItem from './DropdownItem'
import DropdownKeepSelected from './DropdownKeepSelected'

const DROPDOWN_ICON = {
  className: 'dropdown-icon',
  name: 'keyboard_arrow_down'
}

const MultipleModes = {
  FILTER_SELECTED: true,
  KEEP_SELECTED: 'keep'
}

const Dropdown = ({
  className,
  inlineMenu,
  multiple,
  size,
  warning,
  ...otherProps
}) => {
  const { options } = otherProps
  const shouldKeepSelected = options && multiple === MultipleModes.KEEP_SELECTED
  const classes = cx(className, size, {
    'inline-menu': inlineMenu,
    'keep-selected': shouldKeepSelected,
    warning
  })
  const dropdownProps = {
    className: classes,
    icon: DROPDOWN_ICON,
    multiple: !!multiple,
    ...otherProps
  }

  const ElementType = shouldKeepSelected
    ? DropdownKeepSelected
    : SemanticDropdown
  return <ElementType {...dropdownProps} />
}

Dropdown.propTypes = {
  inlineMenu: PropTypes.bool,
  multiple: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(values(MultipleModes))
  ]),
  size: sizePropType,
  warning: PropTypes.bool
}

Dropdown.defaultProps = {
  size: Sizes.DEFAULT
}

Dropdown.Divider = SemanticDropdown.Divider
Dropdown.Header = SemanticDropdown.Header
Dropdown.Item = DropdownItem
Dropdown.Menu = SemanticDropdown.Menu
Dropdown.SearchInput = SemanticDropdown.SearchInput

Dropdown.ICON = DROPDOWN_ICON
Dropdown.MultipleModes

export default Dropdown
