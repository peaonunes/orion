import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Button as SemanticButton } from 'semantic-ui-react'

import { createShorthandFactory } from '../utils/factories'

const Button = ({ className, ...otherProps }) => {
  const {
    children,
    content,
    disabled,
    ghost,
    icon,
    primary,
    secondary,
    subtle
  } = otherProps

  const iconOnly = icon && (_.isNil(content) && !children)

  const regularPrimary = primary && !subtle
  const subtlePrimary = primary && subtle

  const isSecondary = secondary || (!primary && !ghost)

  const regularSecondary = isSecondary && !subtle
  const subtleSecondary = isSecondary && subtle

  const classes = cx(
    className,
    'orion-button h-40 rounded-full font-default outline-none inline-flex items-center transition-default',
    {
      'bg-wave-500 text-white': regularPrimary,
      'bg-gray-900-8 text-gray-900': regularSecondary,
      'bg-white text-wave-500 border border-wave-500': ghost,

      'bg-transparent': subtle,
      'text-wave-500': subtlePrimary,
      'text-gray-700': subtleSecondary,

      'opacity-40': disabled,
      'hover:bg-wave-600 active:bg-wave-700': regularPrimary && !disabled,
      'hover:text-wave-600 active:text-wave-700': subtlePrimary && !disabled,
      'hover:bg-gray-900-12 active:bg-gray-900-16':
        regularSecondary && !disabled,
      'hover:text-gray-800 active:text-gray-900': subtleSecondary && !disabled,
      'hover:bg-wave-500-8 active:bg-wave-500-16': ghost && !disabled,

      'justify-center p-0 w-40': iconOnly,
      'hover:bg-gray-900-8 active:bg-gray-900-12': iconOnly && subtle,

      'px-24': !iconOnly && !subtle
    }
  )
  return <SemanticButton className={classes} {...otherProps} />
}

Button.propTypes = {
  ghost: PropTypes.bool,
  subtle: PropTypes.bool
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticButton.create = createShorthandFactory(Button, value => ({
  content: value
}))

export default Button
