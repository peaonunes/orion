import React from 'react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Button, Checkbox, Input, Dropdown, Form } from '../'
import { sizeKnob } from '../utils/stories'

const developerOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2 },
  { text: 'Maira Bello', value: 3 }
]

export default {
  title: 'Form',
  decorators: [withKnobs]
}

export const subcomponents = () => (
  <Form>
    <Form.Field message={text('Message', '')}>
      <label htmlFor="fullName">{text('Input label', 'Full Name')}</label>
      <Input
        fluid={boolean('Fluid', false)}
        id="fullName"
        placeholder={text('Input placholder', 'Enter your full name')}
        size={sizeKnob()}
        warning={boolean('Warning', false)}
        error={boolean('Error', false)}
        onChange={action('onChange')}
      />
    </Form.Field>
    <Form.Field message={text('Message', '')}>
      <label htmlFor="buddy">{text('Dropdown label', 'Buddy')}</label>
      <Dropdown
        selection
        id="buddy"
        fluid={boolean('Fluid', false)}
        placeholder={text('Dropdown placeholder', 'Choose your buddy')}
        options={object('Dropdown options', developerOptions)}
        warning={boolean('Warning', false)}
        error={boolean('Error', false)}
        size={sizeKnob()}
      />
    </Form.Field>
    <Form.Field message={text('Message', '')}>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit" primary>
      Submit
    </Button>
  </Form>
)

export const formShorthands = () => (
  <Form>
    <Form.Input
      fluid={boolean('Fluid', false)}
      id="fullname"
      label={text('Input label', 'Full Name')}
      message={text('Message', '')}
      placeholder={text('Input placholder', 'Enter your full name')}
      size={sizeKnob()}
      warning={boolean('Warning', false)}
      onChange={action('onChange')}
    />
    <Form.Dropdown
      selection
      fluid={boolean('Fluid', false)}
      id="buddy"
      label={text('Dropdown label', 'Buddy')}
      message={text('Message', '')}
      placeholder={text('Dropdown placeholder', 'Choose your buddy')}
      options={object('Dropdown options', developerOptions)}
      warning={boolean('Warning', false)}
      size={sizeKnob()}
    />
    <Form.Checkbox
      label="I agree to the Terms and Conditions"
      message={text('Message', '')}
    />
    <Button type="submit" primary>
      Submit
    </Button>
  </Form>
)
