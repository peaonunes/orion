import { Table as SemanticTable } from '@inloco/semantic-ui-react'
import React from 'react'

import TabelCell from './TableCell'
import TableHeaderCell from './TableHeaderCell'

const Table = props => <SemanticTable {...props} />

Table.Body = SemanticTable.Body
Table.Cell = TabelCell
Table.Header = SemanticTable.Header
Table.HeaderCell = TableHeaderCell
Table.Row = SemanticTable.Row

export default Table
