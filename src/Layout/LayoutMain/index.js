import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const LayoutMain = ({ className, children, ...otherProps }) => {
  const classes = cx('layout-main', className)
  return (
    <main className={classes} {...otherProps}>
      <div className="layout-main-content">{children}</div>
    </main>
  )
}

LayoutMain.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default LayoutMain
