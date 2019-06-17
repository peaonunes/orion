import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const LayoutTopbar = ({ className, children, ...otherProps }) => {
  const classes = cx('layout-topbar', className)
  return (
    <div className={classes} {...otherProps}>
      <div className="layout-topbar-content">{children}</div>
    </div>
  )
}

LayoutTopbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default LayoutTopbar
