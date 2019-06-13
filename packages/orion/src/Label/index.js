import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Label as SemanticLabel } from 'semantic-ui-react'

import { normalizeIconProp } from '../utils/icons'

const Sizes = {
  DEFAULT: 'default',
  SMALL: 'small'
}

const Label = ({
  children,
  className,
  icon,
  onRemove,
  size,
  ...otherProps
}) => {
  const { content } = otherProps
  const classes = cx(
    className,
    'orion-label inline-flex items-center px-8 bg-gray-900-8 rounded leading-20',
    {
      'h-32': size === Sizes.DEFAULT,
      'h-24': size === Sizes.SMALL
    }
  )

  if (onRemove) {
    const removeIconClasses = cx(
      'h-24 w-24 flex items-center justify-center mr-4 rounded cursor-pointer hover:bg-gray-900-12 active:bg-gray-900-16',
      {
        '-ml-4': size === Sizes.DEFAULT,
        '-ml-8 rounded-r-none': size === Sizes.SMALL
      }
    )
    children = (
      <React.Fragment>
        <div className={removeIconClasses} onClick={onRemove}>
          <Icon className="clear" size="big" />
        </div>
        {children || content}
      </React.Fragment>
    )
  }
  return (
    <SemanticLabel
      className={classes}
      icon={normalizeIconProp(icon)}
      {...otherProps}>
      {children}
    </SemanticLabel>
  )
}

Label.propTypes = {
  size: PropTypes.oneOf([Sizes.DEFAULT, Sizes.SMALL])
}

Label.defaultProps = {
  size: Sizes.DEFAULT
}

export default Label
