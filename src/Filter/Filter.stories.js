import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { object, text, withKnobs } from '@storybook/addon-knobs'

import { Dropdown, Filter, Input } from '../'

const actions = {
  onApply: action('onApply'),
  onClear: action('onClear')
}

storiesOf('Filter', module)
  .addDecorator(withKnobs)
  .add('With input', () => (
    <Filter text={text('Label', 'Open')} {...actions}>
      {({ onChange, value }) => (
        <Input
          autoFocus
          placeholder="Type your name"
          onChange={(event, { value }) => onChange(value)}
          value={value || ''}
        />
      )}
    </Filter>
  ))
  .add('With dropdown', () => {
    const options = object('Options', [
      { text: 'Maíra', value: 0 },
      { text: 'Gileno', value: 1 }
    ])
    return (
      <Filter
        text={text('Label', 'Open')}
        selectedText={value =>
          value.map(index => options[index].text).join(', ')
        }
        {...actions}>
        {({ onChange, value }) => (
          <React.Fragment>
            <Dropdown
              className="mr-16"
              options={options}
              selection
              multiple
              search
              placeholder="Select developers"
              onChange={(event, { value }) =>
                onChange(_.isEmpty(value) ? null : value)
              }
              value={value || []}
            />
          </React.Fragment>
        )}
      </Filter>
    )
  })
