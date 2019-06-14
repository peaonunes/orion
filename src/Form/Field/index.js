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

const Field = ({
  size,
  className,
  children,
  control,
  label,
  ...otherProps
}) => {
  const [controlFilled, setControlFilled] = React.useState(false)

  const handleChange = e => {
    setControlFilled(!_.isEmpty(e.target.value))
  }

  let finalChildren = children
  let floatingLabel = false

  //Case: <Form.Input ... />
  const controlOnChange =
    control === Input || control === Dropdown ? { onChange: handleChange } : {}
  if (!_.isNil(control)) {
    const controlProps = {
      ...otherProps,
      size,
      ...controlOnChange
    }

    if (size === Sizes.DEFAULT && !_.isEmpty(controlOnChange))
      floatingLabel = true

    finalChildren = [
      React.createElement('label', {
        children: label
      }),
      React.createElement(control, controlProps)
    ]
  }

  //Case: <Form.Field ... ><label/><Form.Input /></Form.Field>
  if (!_.isNil(children)) {
    finalChildren = React.Children.map(children, child => {
      if (child.type.name === 'Input' || child.type.name === 'Dropdown') {
        if (child.props.size === Sizes.DEFAULT) floatingLabel = true
        return React.cloneElement(child, {
          onChange: e => {
            handleChange(e)
            if (child.props.onChange) child.props.onChange(e)
          }
        })
      }
      return child
    })
  }

  const classes = cx(className, {
    filled: controlFilled,
    floatingLabel
  })

  const fieldProps = { ...otherProps, children: finalChildren, size }
  console.log(fieldProps)

  return <SemanticFormField className={classes} {...fieldProps} />
}

Field.propTypes = {
  size: PropTypes.oneOf([Sizes.DEFAULT, Sizes.SMALL])
}

Field.defaultProps = {
  size: Sizes.DEFAULT
}

Form.Field = Field

export default Field
