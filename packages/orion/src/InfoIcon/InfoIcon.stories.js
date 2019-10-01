import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { InfoIcon } from '../'

export default {
  title: 'InfoIcon',
  decorators: [withKnobs]
}

export const basic = () => (
  <div className="mt-24">
    <InfoIcon content={text('Content', 'Some info text here.')} />
  </div>
)
