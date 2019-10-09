import PropTypes from 'prop-types'

export const Directions = {
  LEFT: 'left',
  RIGHT: 'right'
}

export const directionPropType = PropTypes.oneOf([
  Directions.LEFT,
  Directions.RIGHT
])
