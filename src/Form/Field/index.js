import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Form } from 'semantic-ui-react'

import Input from '../../Input'
import Dropdown from '../../Dropdown'

import { Sizes, sizePropType } from '../../utils/sizes'

const SemanticFormField = Form.Field

const shouldHaveFloatingLabel = (field, size) =>
  (field === Input || field === Dropdown) && size === Sizes.DEFAULT

const Field = ({ className, children, onChange, ...otherProps }) => {
  const { size, control } = otherProps
  const [controlFilled, setControlFilled] = React.useState(false)

  const handleChange = (e, data) => {
    setControlFilled(!!data.value)
    if (onChange) onChange(e, data)
  }

  let finalChildren = children
  let finalOnChange = onChange
  let floatingLabel = false

  if (shouldHaveFloatingLabel(control, size)) {
    finalOnChange = handleChange
    floatingLabel = true
  }

  if (!_.isNil(children)) {
    finalChildren = React.Children.map(children, child => {
      if (shouldHaveFloatingLabel(child.type, child.props.size)) {
        floatingLabel = true
        return React.cloneElement(child, {
          onChange: (e, data) => {
            setControlFilled(!!data.value)
            if (child.props.onChange) child.propsOnChange(e, data)
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

  return (
    <SemanticFormField
      {...otherProps}
      className={classes}
      children={finalChildren}
      onChange={finalOnChange}
    />
  )
}

Field.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: sizePropType
}

Field.defaultProps = {
  size: Sizes.DEFAULT
}

Form.Field = Field

export default Field
