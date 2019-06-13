import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Icon from './'

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('basic', () => <Icon name={text('icon', 'cloud')} />)
