import _ from 'lodash'
import PropTypes from 'prop-types'
import { Table } from '@inloco/semantic-ui-react'
import React from 'react'

import Divider from '../../Divider'

const TableHeaderCell = ({ children, divider, ...otherProps }) => (
  <Table.HeaderCell
    title={_.isString(children) ? children : null}
    {...otherProps}>
    <div className="orion inner-cell">{children}</div>
    {divider === true ? <Divider /> : divider}
  </Table.HeaderCell>
)

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.oneOfType([PropTypes.node, PropTypes.bool])
}

export default TableHeaderCell
