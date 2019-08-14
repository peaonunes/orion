import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const IosIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24">
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path d="M2.19 10.06v6.32h1.29v-6.32zM9.94 9c1.64 0 2.65 1.23 2.65 3.18s-1 3.18-2.65 3.18-2.67-1.25-2.67-3.18S8.31 9 9.94 9zm8.81-1.22c-1.89 0-3.15 1-3.15 2.49 0 1.23.72 2 2.28 2.32l1.11.26c1.15.26 1.65.65 1.65 1.28s-.79 1.29-1.87 1.29-1.95-.51-2.07-1.3h-1.33c.1 1.5 1.38 2.45 3.3 2.45S22 15.58 22 14c0-1.26-.73-2-2.5-2.36l-1-.23c-1.12-.26-1.58-.6-1.58-1.2C17 9.44 17.67 9 18.73 9a1.65 1.65 0 0 1 1.83 1.25h1.3c-.07-1.46-1.35-2.46-3.11-2.46zm-8.81 0c-2.48 0-4 1.69-4 4.4s1.53 4.39 4 4.39 4-1.7 4-4.39-1.51-4.39-4-4.39zm-7.11-.36a.77.77 0 1 0 0 1.58.77.77 0 1 0 0-1.53z" />
        <path fill="none" d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
)

IosIcon.propTypes = {
  className: PropTypes.string
}

export default IosIcon
