import cx from 'classnames'
import { Table as SemanticTable } from '@inloco/semantic-ui-react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { HorizontalAlignValues } from '../constants'
import { createShorthandFactory } from '../../utils/factories'

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
    <SemanticTable.Cell
      title={_.isString(childContent) ? childContent : null}
      {...otherProps}>
      <div className={classes}>
        <div className={wrapperClasses}>{childContent}</div>
      </div>
    </SemanticTable.Cell>
  )
}

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.node,
  highlight: PropTypes.bool,
  horizontalAlign: PropTypes.oneOf(_.values(HorizontalAlignValues))
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticTable.Cell.create = createShorthandFactory(TableCell, content => ({
  content
}))

TableCell.create = SemanticTable.Cell.create

export default TableCell
