import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'

import { Button, Card } from '../'

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const header = text('Header', 'Header Title')
    const mainContent = text('Main content', 'Card content here')
    const extra = text('Footer', '')
    return (
      <Card fluid={boolean('Fluid', false)}>
        <Card.Content>
          <Card.Header>{header}</Card.Header>
          {mainContent}
        </Card.Content>
        <Card.Content extra>
          {extra || (
            <React.Fragment>
              Footer content here
              <Button className="ml-16" ghost>
                Button Label
              </Button>
            </React.Fragment>
          )}
        </Card.Content>
      </Card>
    )
  })
