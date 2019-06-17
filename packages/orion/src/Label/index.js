import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Label as SemanticLabel } from 'semantic-ui-react'

import Icon from '../Icon'
import { createShorthandFactory } from '../utils/factories'
import { Sizes, sizePropType } from '../utils/sizes'

const Label = ({
  children,
  className,
  content,
  onRemove,
  size,
  ...otherProps
}) => {
  const classes = cx(
    className,
    'orion-label inline-flex items-center px-8 bg-gray-900-8 rounded leading-20 text-gray-900',
    {
      'h-32': size === Sizes.DEFAULT,
      'h-24': size === Sizes.SMALL
    }
  )

  if (onRemove) {
    const removeIconClasses = cx(
      'h-24 w-24 flex items-center justify-center mr-4 rounded cursor-pointer hover:bg-gray-900-12 active:bg-gray-900-16 text-gray-700',
      {
        '-ml-4': size === Sizes.DEFAULT,
        '-ml-8 rounded-r-none': size === Sizes.SMALL
      }
    )
    children = (
      <React.Fragment>
        <div
          className={removeIconClasses}
          onClick={e => onRemove(e, otherProps)}>
          <Icon name="clear" size="big" />
        </div>
        {children || content}
      </React.Fragment>
    )
  }
  return (
    <SemanticLabel
      className={classes}
      content={children ? null : content}
      {...otherProps}>
      {children}
    </SemanticLabel>
  )
}

Label.propTypes = {
  size: sizePropType
}

Label.defaultProps = {
  size: Sizes.DEFAULT
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticLabel.create = createShorthandFactory(Label, value => ({
  content: value
}))

export default Label
