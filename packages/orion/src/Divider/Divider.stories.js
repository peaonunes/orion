import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'

import { Divider } from '../'

export default {
  title: 'Divider',
  decorators: [withKnobs]
}

export const horizontal = () => {
  return (
    <div className="text-center w-384">
      Text at top
      <Divider />
      Text at bottom
    </div>
  )
}

export const vertical = () => {
  return (
    <div className="flex text-center w-384">
      Left Text
      <Divider vertical className="mx-8" />
      Right Text
    </div>
  )
}
