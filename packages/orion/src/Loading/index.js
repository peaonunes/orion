import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Lottie from 'react-lottie'

import { Sizes, sizePropType } from '../utils/sizes'
import animationData from './animationData'

const Loading = ({ className, size, ...otherProps }) => (
  <div className={cx('ui loading-spinner', className, size)} {...otherProps}>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData
      }}
    />
  </div>
)

Loading.propTypes = {
  className: PropTypes.string,
  size: sizePropType
}

Loading.defaultProps = {
  size: Sizes.DEFAULT
}

export default Loading
