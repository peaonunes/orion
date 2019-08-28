import cx from 'classnames'
import { Table } from '@inloco/semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'

const TableCell = ({
  children,
  className,
  content,
  highlight,
  ...otherProps
}) => {
  const classes = cx(className, { highlight })
  const childContent = content || children
  return (
    <Table.Cell
      className={classes}
      title={_.isString(childContent) ? childContent : null}
      {...otherProps}>
      <div className="orion inner-cell">
        <div className="orion inner-cell-wrapper">{childContent}</div>
      </div>
    </Table.Cell>
  )
}

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.node,
  highlight: PropTypes.bool
}

export default TableCell
