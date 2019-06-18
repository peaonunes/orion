import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import defaultLogo from '../../assets/inloco.svg'

const LayoutTopbar = ({ className, children, logo, ...otherProps }) => {
  const classes = cx('layout-topbar', className)
  return (
    <div className={classes} {...otherProps}>
      <div className="layout-topbar-content">
        {logo || <img src={defaultLogo} alt="In Loco's logo" />}
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
