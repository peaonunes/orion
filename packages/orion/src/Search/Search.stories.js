import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  boolean,
  object,
  radios,
  text,
  withKnobs
} from '@storybook/addon-knobs'

import { Search } from '../'

const sizeKnob = () => radios('size', { Default: '', Small: 'small' }, '')

const developerOptions = [
  { title: 'Francisco Gileno', value: 1 },
  { title: 'Rafael Nunes', value: 2 },
  { title: 'Maira Bello', value: 3 }
]

storiesOf('Search', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <Search
        placeholder={text('Placeholder', 'Search Developer')}
        results={object('Results', developerOptions)}
        size={sizeKnob()}
        disabled={boolean('Disabled', false)}
        error={boolean('Error', false)}
        warning={boolean('Warning', false)}
      />
    )
  })
