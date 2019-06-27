import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../../Logo'

const LayoutTopbar = ({ className, children, logo, ...otherProps }) => {
  const classes = cx('layout-topbar', className)
  return (
    <div className={classes} {...otherProps}>
      <div className="layout-topbar-content">
        {logo || <Logo />}
        {children}
      </div>
    </div>
  )
}

LayoutTopbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  logo: PropTypes.node
}

export default LayoutTopbar
