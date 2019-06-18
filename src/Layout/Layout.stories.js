import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { Dropdown, Layout } from '../'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Layout className="absolute left-0 top-0 w-full">
      <Layout.Topbar>
        <Dropdown
          className="ml-auto"
          text="Maira Bello"
          options={[
            { text: 'Account', value: 1 },
            { text: 'Logout', value: 2 }
          ]}
          compact
          size="small"
        />
      </Layout.Topbar>
      <Layout.Main>Main Content</Layout.Main>
    </Layout>
  ))
