import React from 'react'
import { array, number, withKnobs } from '@storybook/addon-knobs'

import { StepsNav } from '../'

export default {
  title: 'StepsNav',
  decorators: [withKnobs]
}

export const defaultStory = () => (
  <StepsNav
    steps={array('Steps', [
      'The Initial Step',
      'A Long Step',
      'The Longeeeest Step',
      'Final Step'
    ])}
    currentStep={number('Current Step', 1)}
  />
)

defaultStory.story = {
  name: 'Default'
}
