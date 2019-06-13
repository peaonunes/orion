import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon as SemanticIcon } from 'semantic-ui-react'

import { createShorthandFactory } from '../utils/factories'

const Icon = ({ className, name, ...otherProps }) => {
  const classes = cx(className, 'icon material-icons text-lg')
  return (
    <i className={classes} {...otherProps}>
      {name}
    </i>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticIcon.create = createShorthandFactory(Icon, value => ({ name: value }))

export default Icon
