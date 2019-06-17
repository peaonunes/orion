import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Message as SemanticMessage } from 'semantic-ui-react'

import Icon from '../Icon'

const Message = ({ error, success, warning, className, ...otherProps }) => {
  const classes = cx(className, {
    error,
    success,
    warning
  })

  const icon = warning ? (
    <Icon name="warning" className="text-yellow-500" />
  ) : error ? (
    <Icon name="error" className="text-magenta-500" />
  ) : (
    <Icon name="check" className="text-green-500" />
  )

  return <SemanticMessage icon={icon} className={classes} {...otherProps} />
}

Message.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool
}

Message.defaultProps = {
  success: true
}

export default Message
