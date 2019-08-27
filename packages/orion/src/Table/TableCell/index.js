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
  return (
    <Table.Cell className={classes} {...otherProps}>
      <div className="orion inner-cell">
        <div className="orion inner-cell-wrapper">{content || children}</div>
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
