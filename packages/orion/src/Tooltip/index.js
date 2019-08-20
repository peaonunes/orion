import cx from 'classnames'
import React from 'react'
import { Popup } from '@inloco/semantic-ui-react'

import { Sizes } from '../utils/sizes'

const Tooltip = ({ className, ...otherProps }) => (
  <Popup
    className={cx(className, 'tooltip')}
    size={Sizes.SMALL}
    {...otherProps}
  />
)

export default Tooltip
