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
    const disabled = boolean('disabled')
    return (
      <React.Fragment>
        <Button
          primary
          content={text('content', 'Click Me')}
          disabled={disabled}
          icon={text('icon', 'cloud')}
          {...actions}
        />
        <br />
        <br />
        <Button
          primary
          disabled={disabled}
          icon={text('icon', 'cloud')}
          {...actions}
        />
      </React.Fragment>
    )
  })
  .add('secondary', () => {
    const disabled = boolean('disabled')
    return (
      <React.Fragment>
        <Button
          secondary
          content={text('content', 'Click Me')}
          disabled={disabled}
          icon={text('icon', 'cloud')}
          {...actions}
        />
        <br />
        <br />
        <Button
          secondary
          disabled={disabled}
          icon={text('icon', 'cloud')}
          {...actions}
        />
      </React.Fragment>
    )
  })
  .add('ghost', () => {
    const disabled = boolean('disabled')
    return (
      <React.Fragment>
        <Button
          ghost
          content={text('content', 'Click Me')}
          disabled={disabled}
          icon={text('icon', 'cloud')}
          {...actions}
        />
        <br />
        <br />
        <Button
          ghost
          disabled={disabled}
          icon={text('icon', 'cloud')}
          {...actions}
        />
      </React.Fragment>
    )
  })
  .add('subtle primary', () => {
    const disabled = boolean('disabled')
    return (
      <React.Fragment>
        <Button
          primary
          subtle
          content={text('content', 'Click Me')}
          disabled={disabled}
          icon={text('icon', 'cloud')}
          {...actions}
        />
        <br />
        <br />
        <Button
          primary
          subtle
          disabled={disabled}
          icon={text('icon', 'cloud')}
          {...actions}
        />
      </React.Fragment>
    )
  })
  .add('subtle secondary', () => {
    const disabled = boolean('disabled')
    return (
      <React.Fragment>
        <Button
          secondary
          subtle
          content={text('content', 'Click Me')}
          disabled={disabled}
          icon={text('icon', 'cloud')}
          {...actions}
        />
        <br />
        <br />
        <Button
          secondary
          subtle
          disabled={disabled}
          icon={text('icon', 'cloud')}
          {...actions}
        />
      </React.Fragment>
    )
  })
