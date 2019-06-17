import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  boolean,
  object,
  radios,
  text,
  withKnobs
} from '@storybook/addon-knobs'

import Select from './'
import { Sizes } from '../utils/sizes'
import { sizeKnob } from '../utils/stories'

const developerOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2 },
  { text: 'Maira Bello', value: 3 }
]

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('selection', () => {
    return (
      <Select
        placeholder={text('Placeholder', 'Select Developer', 'Content')}
        options={object('Options', developerOptions, 'Content')}
        fluid={boolean('Fluid', false, 'Content')}
        search={boolean('Search', false, 'Type')}
        multiple={boolean('Multiple', false, 'Type')}
        size={sizeKnob(Sizes.DEFAULT, 'Size')}
        disabled={boolean('Disabled', false, 'State')}
        error={boolean('Error', false, 'State')}
        warning={boolean('Warning', false, 'State')}
      />
    )
  })
