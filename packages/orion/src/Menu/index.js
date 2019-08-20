import cx from 'classnames'
import React from 'react'
import { Menu as SemanticMenu } from '@inloco/semantic-ui-react'

const Menu = ({ className, switcher, ...otherProps }) => (
  <SemanticMenu className={cx(className, { switcher })} {...otherProps} />
)

Menu.Header = SemanticMenu.Header
Menu.Item = SemanticMenu.Item
Menu.Menu = SemanticMenu.Menu

export default Menu
