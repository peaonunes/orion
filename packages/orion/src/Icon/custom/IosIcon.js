import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const IosIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <g data-name="Layer 1-2">
          <path d="M.18,9.67v7.6H1.73V9.67ZM9.5,8.4c2,0,3.19,1.48,3.19,3.82s-1.21,3.83-3.19,3.83-3.21-1.51-3.21-3.83S7.54,8.4,9.5,8.4ZM20.09,6.93c-2.27,0-3.79,1.2-3.79,3,0,1.47.87,2.4,2.75,2.79l1.33.31c1.38.31,2,.78,2,1.54s-.95,1.55-2.24,1.55-2.35-.61-2.49-1.56H16c.12,1.8,1.66,2.94,4,2.94s4-1.19,4-3.09c0-1.51-.88-2.4-3-2.84l-1.2-.27c-1.35-.32-1.9-.72-1.9-1.45.1-.92.9-1.45,2.18-1.45a2,2,0,0,1,2.2,1.5h1.56c-.08-1.75-1.62-3-3.74-3ZM9.5,6.93c-3,0-4.81,2-4.81,5.29S6.53,17.5,9.5,17.5s4.81-2,4.81-5.28S12.49,6.94,9.5,6.94ZM1,6.5A1,1,0,0,0,1,8.4a.93.93,0,1,0,.21-1.84H1Z" />
        </g>
      </g>
    </g>
  </svg>
)

IosIcon.propTypes = {
  className: PropTypes.string
}

export default IosIcon
