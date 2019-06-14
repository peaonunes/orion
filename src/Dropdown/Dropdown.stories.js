import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import Dropdown from './'
import { Sizes } from '../utils/sizes'
import { sizeKnob } from '../utils/stories'

const developerOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2 },
  { text: 'Maira Bello', value: 3 }
]

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const menuOptions = [{ text: 'Account' }, { text: 'Logout' }]
    return (
      <Dropdown
        text={text('Label', 'Maira Bello')}
        options={object('Menu options', menuOptions)}
        compact={boolean('Compact', true)}
        size={sizeKnob('small')}
      />
    )
  })
  .add('selection', () => {
    return (
      <Dropdown
        placeholder={text('Placeholder', 'Select Developer', 'Content')}
        selection
        options={object('Options', developerOptions, 'Content')}
        fluid={boolean('Fluid', false, 'Size')}
        compact={boolean('Compact', false, 'Size')}
        search={boolean('Search', false, 'Type')}
        multiple={boolean('Multiple', false, 'Type')}
        size={sizeKnob(Sizes.DEFAULT, 'Size')}
        disabled={boolean('Disabled', false, 'State')}
        error={boolean('Error', false, 'State')}
        warning={boolean('Warning', false, 'State')}
      />
    )
  })
