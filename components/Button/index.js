import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Button as SemanticButton } from 'semantic-ui-react'

import { normalizeIconProp } from '../utils/icons'

const Button = ({ className, icon, ...otherProps }) => {
  const {
    children,
    content,
    disabled,
    ghost,
    primary,
    secondary,
    subtle
  } = otherProps

  const iconOnly = icon && (_.isNil(content) && !children)

  const regularPrimary = primary && !subtle
  const subtlePrimary = primary && subtle

  const regularSecondary = secondary && !subtle
  const subtleSecondary = secondary && subtle

  const classes = cx(
    className,
    'orion-button h-40 rounded-full font-default outline-none flex items-center transition-default',
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
  return (
    <SemanticButton
      className={classes}
      icon={normalizeIconProp(icon)}
      {...otherProps}
    />
  )
}

Button.propTypes = {
  ghost: PropTypes.bool,
  subtle: PropTypes.bool
}

export default Button
