import _ from 'lodash'
import cx from 'classnames'
import React from 'react'
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react'

const Checkbox = ({ className, ...otherProps }) => {
  const classes = cx(className, 'orion-checkbox relative')
  return <SemanticCheckbox className={classes} {...otherProps} />
}

export default Checkbox
