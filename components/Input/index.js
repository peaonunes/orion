import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Input as SemanticInput } from 'semantic-ui-react'

const Input = ({ className, warning, ...otherProps }) => {
  const classes = cx(className, 'orion-input inline-flex', {
    warning
  })

  return <SemanticInput className={classes} {...otherProps} />
}

Input.propTypes = {
  warning: PropTypes.bool
}

export default Input
