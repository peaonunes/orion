import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Input as SemanticInput } from 'semantic-ui-react'

import { createShorthandFactory } from '../utils/factories'
import { sizePropType } from '../utils/sizes'

const Input = ({ className, warning, size, ...otherProps }) => {
  const { fluid } = otherProps
  const classes = cx(className, size, 'orion-input inline-flex relative', {
    warning,
    'w-full': fluid
  })

  return <SemanticInput className={classes} {...otherProps} />
}

Input.propTypes = {
  size: sizePropType,
  warning: PropTypes.bool
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticInput.create = createShorthandFactory(Input, type => ({ type }))

export default Input
