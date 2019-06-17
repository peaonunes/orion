import PropTypes from 'prop-types'

export const Sizes = {
  DEFAULT: '',
  SMALL: 'small'
}

export const sizePropType = PropTypes.oneOf([Sizes.DEFAULT, Sizes.SMALL])
