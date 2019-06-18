import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { object, withKnobs } from '@storybook/addon-knobs'

import { Menu } from '../'

storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    return (
      <Menu
        items={object('Items', [
          { name: 'Onboarding', key: 0 },
          { name: 'Insights', key: 1 },
          { name: 'Automation', key: 2 }
        ])}
        defaultActiveIndex={0}
        onItemClick={action('onItemClick')}
      />
    )
  })
  .add('Items on the right', () => {
    return (
      <Menu>
        <Menu.Item name="Onboarding" active />
        <Menu.Item name="Insights" />
        <Menu.Item name="Automation" />

        <Menu.Menu position="right">
          <Menu.Item name="Account" icon="library_books" />
          <Menu.Item name="Log Out" />
        </Menu.Menu>
      </Menu>
    )
  })
