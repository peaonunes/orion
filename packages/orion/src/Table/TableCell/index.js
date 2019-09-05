import cx from 'classnames'
import { Table } from '@inloco/semantic-ui-react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { HorizontalAlignValues } from '../constants'

const ALIGN_TO_JUSTIFY_CONTENT = {
  [HorizontalAlignValues.LEFT]: 'justify-start',
  [HorizontalAlignValues.CENTER]: 'justify-center',
  [HorizontalAlignValues.RIGHT]: 'justify-end'
}

const TableCell = ({
  children,
  className,
  content,
  highlight,
  horizontalAlign,
  ...otherProps
}) => {
  const classes = cx('orion inner-cell', className, { highlight })
  const wrapperClasses = cx('inner-cell-wrapper', {
    [ALIGN_TO_JUSTIFY_CONTENT[horizontalAlign]]: !!horizontalAlign
  })
  const childContent = content || children
  return (
    <Table.Cell
      title={_.isString(childContent) ? childContent : null}
      {...otherProps}>
      <div className={classes}>
        <div className={wrapperClasses}>{childContent}</div>
      </div>
    </Table.Cell>
  )
}

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.node,
  highlight: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf(_.values(HorizontalAlignValues))
}

export default TableCell
