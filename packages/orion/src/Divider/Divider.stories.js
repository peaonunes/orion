import React from 'react'
import { withKnobs } from '@storybook/addon-knobs/react'

import { Divider } from '../'

export default {
  title: 'Divider',
  decorators: [withKnobs]
}

export const alone = () => {
  return <Divider />
}

export const withinContent = () => {
  return (
    <div className="text-center w-384">
      Text at top
      <Divider />
      Text at bottom
    </div>
  )
}
