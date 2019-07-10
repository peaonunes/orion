import cx from 'classnames'
import React from 'react'
import { Popup } from 'semantic-ui-react'

import Icon from '../Icon'
import { Sizes } from '../utils/sizes'

const InfoIcon = props => (
  <Popup
    size={Sizes.SMALL}
    trigger={<Icon className="info-icon" name="info" />}
    position="right center"
    {...props}
  />
)

export default InfoIcon
