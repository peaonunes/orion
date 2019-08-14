import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'
import Button from './'

export const actions = {
  onClick: action('onClick')
}

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => {
    const disabled = boolean('Disabled')
    return (
      <React.Fragment>
        <Button
          fluid={boolean('Fluid', false)}
          primary
          content={text('Content', 'Click Me')}
          disabled={disabled}
          icon={text('First Icon', '') || null}
          {...actions}
        />
        <br />
        <br />
        <Button
          fluid={boolean('Fluid', false)}
          primary
          disabled={disabled}
          icon={text('Second Icon', 'cloud')}
          {...actions}
        />
      </React.Fragment>
    )
  })
  .add('secondary', () => {
    const disabled = boolean('Disabled')
    return (
      <React.Fragment>
        <Button
          fluid={boolean('Fluid', false)}
          secondary
          content={text('Content', 'Click Me')}
          disabled={disabled}
          icon={text('First Icon', '') || null}
          {...actions}
        />
        <br />
        <br />
        <Button
          fluid={boolean('Fluid', false)}
          secondary
          disabled={disabled}
          icon={text('Second Icon', 'cloud')}
          {...actions}
        />
      </React.Fragment>
    )
  })
  .add('ghost', () => {
    const disabled = boolean('Disabled')
    return (
      <React.Fragment>
        <Button
          fluid={boolean('Fluid', false)}
          ghost
          content={text('Content', 'Click Me')}
          disabled={disabled}
          icon={text('First Icon', '') || null}
          {...actions}
        />
        <br />
        <br />
        <Button
          fluid={boolean('Fluid', false)}
          ghost
          disabled={disabled}
          icon={text('Second Icon', 'cloud')}
          {...actions}
        />
      </React.Fragment>
    )
  })
  .add('subtle primary', () => {
    const disabled = boolean('Disabled')
    return (
      <React.Fragment>
        <Button
          fluid={boolean('Fluid', false)}
          primary
          subtle
          content={text('Content', 'Click Me')}
          disabled={disabled}
          icon={text('First Icon', '') || null}
          {...actions}
        />
        <br />
        <br />
        <Button
          fluid={boolean('Fluid', false)}
          primary
          subtle
          disabled={disabled}
          icon={text('Second Icon', 'apps')}
          {...actions}
        />
      </React.Fragment>
    )
  })
  .add('subtle secondary', () => {
    const disabled = boolean('Disabled')
    return (
      <React.Fragment>
        <Button
          fluid={boolean('Fluid', false)}
          secondary
          subtle
          content={text('Content', 'Click Me')}
          disabled={disabled}
          icon={text('First Icon', '') || null}
          {...actions}
        />
        <br />
        <br />
        <Button
          fluid={boolean('Fluid', false)}
          secondary
          subtle
          disabled={disabled}
          icon={text('Second Icon', 'apps')}
          {...actions}
        />
      </React.Fragment>
    )
  })
