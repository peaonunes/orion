import _ from 'lodash'
import React from 'react'
import { Dropdown as SemanticDropdown } from '@inloco/semantic-ui-react'

import { createShorthandFactory } from '../../utils/factories'

const DropdownItem = ({
  children,
  content,
  description,
  text,
  ...otherProps
}) => {
  if (!children) {
    children = (
      <React.Fragment>
        <div className="text">{_.isNil(content) ? text : content}</div>
        {!_.isNil(description) && (
          <div className="description">{description}</div>
        )}
      </React.Fragment>
    )
  }
  return (
    <SemanticDropdown.Item {...otherProps}>{children}</SemanticDropdown.Item>
  )
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticDropdown.Item.create = createShorthandFactory(
  DropdownItem,
  opts => opts
)

DropdownItem.create = SemanticDropdown.Item.create

export default DropdownItem
