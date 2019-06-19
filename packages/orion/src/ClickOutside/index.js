import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const ClickOutside = ({ children, onClickOutside }) => {
  const ref = useRef()

  const handleClick = event => {
    if (!ref.current.contains(event.target)) {
      onClickOutside(event)
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleClick, true)
    return () => {
      document.removeEventListener('mouseup', handleClick, true)
    }
  }, [onClickOutside])

  return <div ref={ref}>{children}</div>
}

ClickOutside.propTypes = {
  children: PropTypes.node,
  onClickOutside: PropTypes.func.isRequired
}

export default ClickOutside
