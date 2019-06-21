import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Dropdown as SemanticDropdown } from 'semantic-ui-react'

import { Sizes, sizePropType } from '../utils/sizes'

const DROPDOWN_ICON = {
  className: 'dropdown-icon',
  name: 'keyboard_arrow_down'
}

const Dropdown = ({ className, inlineMenu, size, warning, ...otherProps }) => {
  return (
    <SemanticDropdown
      className={cx(className, size, { 'inline-menu': inlineMenu, warning })}
      icon={DROPDOWN_ICON}
      {...otherProps}
    />
  )
}

Dropdown.propTypes = {
  inlineMenu: PropTypes.bool,
  size: sizePropType,
  warning: PropTypes.bool
}

Dropdown.defaultProps = {
  size: Sizes.DEFAULT
}

Dropdown.Divider = SemanticDropdown.Divider
Dropdown.Header = SemanticDropdown.Header
Dropdown.Item = SemanticDropdown.Item
Dropdown.Menu = SemanticDropdown.Menu
Dropdown.SearchInput = SemanticDropdown.SearchInput

Dropdown.ICON = DROPDOWN_ICON

export default Dropdown
