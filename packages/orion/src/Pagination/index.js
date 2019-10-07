import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Button from '../Button'

const ACTIVE_PAGE_MIN = 1

const Pagination = ({
  activePage,
  className,
  disabled,
  i18n,
  onPageChange,
  pageSize,
  right,
  totalItems,
  ...otherProps
}) => {
  if (totalItems <= 1 || pageSize < 1 || totalItems <= pageSize) return null

  const orionPaginationClasses = cx('orion-pagination', className, {
    'orion-pagination--right': right
  })

  const activePageMax = Math.floor((totalItems - 1) / pageSize) + 1
  const possibleActivePage = Math.max(
    Math.min(activePage, activePageMax),
    ACTIVE_PAGE_MIN
  )
  const firstPageItem = pageSize * (possibleActivePage - 1) + 1
  const lastPageItem = Math.min(pageSize * possibleActivePage, totalItems)
  return (
    <div className={orionPaginationClasses} {...otherProps}>
      <div>
        <span className="orion-pagination__value">
          {firstPageItem}-{lastPageItem}
        </span>
        <span className="orion-pagination__text">{i18n.of}</span>
        <span className="orion-pagination__value">{totalItems}</span>
        <span className="orion-pagination__text">{i18n.results}</span>
      </div>
      <div className="orion-pagination__actions">
        <Button
          disabled={disabled || possibleActivePage === ACTIVE_PAGE_MIN}
          icon="keyboard_arrow_left"
          title="previous"
          onClick={e => onPageChange(e, { activePage: possibleActivePage - 1 })}
        />
        <Button
          disabled={disabled || possibleActivePage === activePageMax}
          icon="keyboard_arrow_right"
          title="next"
          onClick={e => onPageChange(e, { activePage: possibleActivePage + 1 })}
        />
      </div>
    </div>
  )
}

Pagination.propTypes = {
  activePage: PropTypes.number,
  onPageChange: PropTypes.func,
  pageSize: PropTypes.number,
  right: PropTypes.bool,
  totalItems: PropTypes.number.isRequired,
  className: PropTypes.string,
  i18n: PropTypes.shape({
    of: PropTypes.string,
    results: PropTypes.string
  })
}

Pagination.defaultProps = {
  activePage: 1,
  pageSize: 10,
  i18n: {
    of: 'of',
    results: 'results'
  }
}

export default Pagination
