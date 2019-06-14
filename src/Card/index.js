import _ from 'lodash'
import cx from 'classnames'
import React from 'react'
import { Card as SemanticCard } from 'semantic-ui-react'

const Card = ({ className, ...otherProps }) => {
  const classes = cx(className, 'orion-card bg-white p-24 rounded shadow-100')
  return <SemanticCard className={classes} {...otherProps} />
}

export default Card
