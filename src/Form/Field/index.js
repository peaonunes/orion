import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Form } from 'semantic-ui-react'

import Input from '../../Input'
import Dropdown from '../../Dropdown'

const SemanticFormField = Form.Field

const Sizes = {
  DEFAULT: 'default',
  SMALL: 'small'
}

const Field = ({ className, children, onChange, ...otherProps }) => {
  const { size, control } = otherProps
  const [controlFilled, setControlFilled] = React.useState(false)

  const handleChange = (e, data) => {
    setControlFilled(!!data.value)
    if (onChange) onChange(e, data)
  }

  let finalChildren = children
  let floatingLabel = false
  let controlOnChange = onChange

  if ((control === Input || control === Dropdown) && size === Sizes.DEFAULT) {
    floatingLabel = true
    controlOnChange = handleChange
  }

  if (!_.isNil(children)) {
    finalChildren = React.Children.map(children, child => {
      if (child.type === Input || child.type === Dropdown) {
        if (child.props.size === Sizes.DEFAULT) floatingLabel = true
        return React.cloneElement(child, {
          onChange: handleChange
        })
      }
      return child
    })
  }

  const classes = cx(className, {
    filled: controlFilled,
    floatingLabel
  })

  return (
    <SemanticFormField
      {...otherProps}
      className={classes}
      children={finalChildren}
      onChange={controlOnChange}
    />
  )
}

Field.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf([Sizes.DEFAULT, Sizes.SMALL])
}

Field.defaultProps = {
  size: Sizes.DEFAULT
}

Form.Field = Field

export default Field
