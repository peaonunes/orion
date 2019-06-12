import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Input as SemanticInput } from 'semantic-ui-react'

const Sizes = {
  DEFAULT: 'default',
  SMALL: 'small'
}

const Input = ({ className, warning, size, ...otherProps }) => {
  const classes = cx(className, size, 'orion-input inline-flex', {
    warning
  })

  return <SemanticInput className={classes} {...otherProps} />
}

Input.propTypes = {
  size: PropTypes.oneOf([Sizes.DEFAULT, Sizes.SMALL]),
  warning: PropTypes.bool
}

export default Input
