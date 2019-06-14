import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Form } from 'semantic-ui-react'

// import { createShorthandFactory } from '../utils/factories'

const Sizes = {
  DEFAULT: 'default',
  SMALL: 'small'
}

const Field = ({ size, className, ...otherProps }) => {
  const [controlFilled, setControlFilled] = React.useState(false)

  const handleChange = e => {
    setControlFilled(!_.isEmpty(e.target.value))
  }

  const classes = cx(className, {
    filled: controlFilled,
    floatingLabel: size === Sizes.DEFAULT
  })

  const clonedChildren = React.Children.map(otherProps.children, child => {
    if (child.type.name === 'Input' || child.type.name === 'Dropdown') {
      return React.cloneElement(child, {
        onChange: e => {
          handleChange(e)
          if (child.props.onChange) child.props.onChange(e)
        }
      })
    }

    return child
  })

  const fieldProps = { ...otherProps, children: clonedChildren }

  return <Form.Field className={classes} {...fieldProps} />
}

Field.propTypes = {
  size: PropTypes.oneOf([Sizes.DEFAULT, Sizes.SMALL])
}

Field.defaultProps = {
  size: Sizes.DEFAULT
}

Form.Field = Field

export default Field
