import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import Input from './'
import { sizeKnob } from '../utils/stories'

export default {
  title: 'Input',
  decorators: [withKnobs]
}

export const defaultStory = () => {
  const error = boolean('error', false)
  const warning = boolean('warning', false)
  const disabled = boolean('disabled', false)
  return (
    <Input
      placeholder="Input placeholder"
      warning={warning}
      error={error}
      size={sizeKnob()}
      disabled={disabled}
      fluid={boolean('fluid', false)}
      icon={text('Icon')}
    />
  )
}

defaultStory.story = {
  name: 'default'
}
