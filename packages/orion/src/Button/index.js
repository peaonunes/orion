import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Button as SemanticButton } from 'semantic-ui-react'

import { createShorthandFactory } from '../utils/factories'

const Button = ({ className, ghost, secondary, subtle, ...otherProps }) => {
  const { primary } = otherProps
  const classes = cx(className, { ghost, subtle })
  return (
    <SemanticButton
      className={classes}
      secondary={secondary || (!primary && !ghost)}
      {...otherProps}
    />
  )
}

Button.propTypes = {
  ghost: PropTypes.bool,
  subtle: PropTypes.bool
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticButton.create = createShorthandFactory(Button, value => ({
  content: value
}))

Button.create = SemanticButton.create

export default Button
