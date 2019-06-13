import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Search as SemanticSearch } from 'semantic-ui-react'

const Sizes = {
  DEFAULT: '',
  SMALL: 'small'
}

const Search = ({ className, size, ...otherProps }) => {
  const { disabled } = otherProps
  const classes = cx(className, 'orion-search relative inline-block', {
    'h-48': size === Sizes.DEFAULT,
    'h-32': size === Sizes.SMALL
  })
  return <SemanticSearch className={classes} {...otherProps} />
}

Search.propTypes = {
  size: PropTypes.oneOf([Sizes.DEFAULT, Sizes.SMALL])
}

Search.defaultProps = {
  size: Sizes.DEFAULT
}

export default Search
