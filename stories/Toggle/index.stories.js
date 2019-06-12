import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import { storiesOf } from '@storybook/react'

storiesOf('Toggle', module)
  .add('basic', () => (
    <React.Fragment>
      <Checkbox className="blue" label="Blue" toggle />
      <br />
      <br />
      <Checkbox className="pink" label="Pink" toggle />
      <br />
      <br />
      <Checkbox className="green" label="Green" toggle />
    </React.Fragment>
  ))
  .add('toggle disabled', () => (
    <React.Fragment>
      <Checkbox label="Checked disabled" toggle disabled defaultChecked />
      <br />
      <br />
      <Checkbox label="Unchecked disabled" toggle disabled />
    </React.Fragment>
  ))
