import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Dropdown as SemanticDropdown } from '@inloco/semantic-ui-react'

import { Sizes, sizePropType } from '../utils/sizes'
import DropdownItem from './DropdownItem'
import DropdownKeepSelected from './DropdownKeepSelected'
import useInlineMenuWrapper from './useInlineMenuWrapper'

const DROPDOWN_ICON = {
  className: 'dropdown-icon',
  name: 'keyboard_arrow_down'
}

const LOADING_ICON = {
  className: 'dropdown-loading-icon'
}

const MultipleModes = {
  FILTER_SELECTED: true,
  KEEP_SELECTED: 'keep'
}

const Dropdown = ({
  className,
  icon,
  inlineMenu,
  multiple,
  size,
  warning,
  ...otherProps
}) => {
  const { loading, options } = otherProps
  const shouldKeepSelected = options && multiple === MultipleModes.KEEP_SELECTED
  const classes = cx(className, size, {
    'inline-menu': inlineMenu,
    'keep-selected': shouldKeepSelected,
    warning
  })

  const dropdownProps = {
    className: classes,
    icon: loading ? LOADING_ICON : icon,
    multiple: !!multiple,
    ...otherProps
  }

  const ElementType = shouldKeepSelected
    ? DropdownKeepSelected
    : SemanticDropdown
  const element = <ElementType {...dropdownProps} />

  const [wrapperRef, wrapperMargin] = useInlineMenuWrapper(options)
  if (inlineMenu) {
    return (
      <div ref={wrapperRef} style={{ marginBottom: `${wrapperMargin}px` }}>
        {element}
      </div>
    )
  }

  return element
}

Dropdown.propTypes = {
  inlineMenu: PropTypes.bool,
  multiple: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(_.values(MultipleModes))
  ]),
  size: sizePropType,
  warning: PropTypes.bool
}

Dropdown.defaultProps = {
  deburr: true,
  icon: DROPDOWN_ICON,
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
