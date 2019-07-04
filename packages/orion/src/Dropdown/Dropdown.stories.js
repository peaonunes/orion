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
  .add('Basic', () => {
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
  .add('Selection', () => {
    const icon = text('Icon', '', 'Content')
    return (
      <Dropdown
        placeholder={text('Placeholder', 'Select Developer', 'Content')}
        selection
        options={object('Options', developerOptions, 'Content')}
        icon={icon || Dropdown.ICON}
        fluid={boolean('Fluid', false, 'Size')}
        compact={boolean('Compact', false, 'Size')}
        search={boolean('Search', false, 'Type')}
        multiple={boolean('Multiple', false, 'Type')}
        inlineMenu={boolean('Inline Menu', false, 'Type')}
        size={sizeKnob(Sizes.DEFAULT, 'Size')}
        disabled={boolean('Disabled', false, 'State')}
        loading={boolean('Loading', false, 'State')}
        error={boolean('Error', false, 'State')}
        warning={boolean('Warning', false, 'State')}
      />
    )
  })
  .add('Multiple selection, keeping selected', () => {
    return (
      <div style={{ width: '400px' }}>
        <Dropdown
          placeholder="Select Developer"
          selection
          icon="search"
          search
          multiple="keep"
          inlineMenu
          fluid
          options={object('Options', developerOptions)}
        />
      </div>
    )
  })
  .add('Detailed items', () => {
    const fruits = [
      { text: 'Strawberry', description: 'Red', value: 1 },
      { text: 'Banana', description: 'Yellow', value: 2 },
      { text: 'Watermelon', description: 'Green', value: 3 }
    ]
    return (
      <div style={{ width: '400px' }}>
        <Dropdown
          placeholder="Select Developer"
          selection
          search
          multiple="keep"
          fluid
          options={object('Options', fruits)}
        />
      </div>
    )
  })
