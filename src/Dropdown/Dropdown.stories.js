import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  boolean,
  object,
  radios,
  text,
  withKnobs
} from '@storybook/addon-knobs'

import Dropdown from './'

const sizeKnob = () =>
  radios('size', { Default: '', Small: 'small' }, '', 'Size')

const developerOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2 },
  { text: 'Maira Bello', value: 3 }
]

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('selection', () => {
    return (
      <Dropdown
        placeholder={text('Placeholder', 'Select Developer', 'Content')}
        selection
        options={object('Options', developerOptions, 'Content')}
        search={boolean('Search', false, 'Type')}
        multiple={boolean('Multiple', false, 'Type')}
        size={sizeKnob()}
        disabled={boolean('Disabled', false, 'State')}
        error={boolean('Error', false, 'State')}
        warning={boolean('Warning', false, 'State')}
      />
    )
  })
