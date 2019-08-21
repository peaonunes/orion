import { Table } from '@inloco/semantic-ui-react'
import React from 'react'

const TableCell = ({ children, ...otherProps }) => (
  <Table.Cell {...otherProps}>
    <div className="orion inner-cell">{children}</div>
  </Table.Cell>
)

export default TableCell
