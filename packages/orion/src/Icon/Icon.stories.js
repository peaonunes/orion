import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { Card, Icon } from '../'

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Icon color={text('Color')} name={text('icon', 'cloud')} />
  ))
  .add('Custom Icons', () => {
    const IconCard = ({ name }) => (
      <Card className="flex flex-col items-center m-8 ml-0 p-4 w-48">
        <Icon name={name} />
        <div className="text-sm">{name}</div>
      </Card>
    )
    return (
      <React.Fragment>
        <div>
          Icon accepts all{' '}
          <a href="https://material.io/resources/icons" target="blank">
            material icons
          </a>
          , plus the ones listed here:
        </div>
        <div className="flex">
          <IconCard name="ios" />
          <IconCard name="react" />
        </div>
      </React.Fragment>
    )
  })
