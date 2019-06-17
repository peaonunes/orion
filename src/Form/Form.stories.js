import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  boolean,
  object,
  text,
  radios,
  withKnobs
} from '@storybook/addon-knobs'

import { Button, Checkbox, Input, Dropdown, Form } from '../'

import { sizeKnob } from '../utils/stories'

const developerOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2 },
  { text: 'Maira Bello', value: 3 }
]

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add('Subcomponents', () => (
    <Form>
      <Form.Field>
        <label htmlFor="fullName">{text('Full name label', 'Full Name')}</label>
        <Input
          fluid={boolean('Fluid', false)}
          id="fullName"
          placeholder={text('Placholder Label', 'Enter your full name')}
          size={sizeKnob()}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="buddy">{text('Buddy label', 'Buddy')}</label>
        <Dropdown
          selection
          id="buddy"
          fluid={boolean('Fluid', false)}
          placeholder={text('Buddy placeholder', 'Choose your buddy')}
          options={object('Buddy Options', developerOptions)}
          size={sizeKnob()}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  ))
  .add('Form shorthands', () => (
    <Form>
      <Form.Input
        fluid={boolean('Fluid', false)}
        id="fullname"
        label={text('Full name label', 'Full Name')}
        placeholder={text('Placholder Label', 'Enter your full name')}
        size={sizeKnob()}
      />
      <Form.Dropdown
        selection
        fluid={boolean('Fluid', false)}
        id="buddy"
        label={text('Buddy label', 'Buddy')}
        placeholder={text('Buddy placeholder', 'Choose your buddy')}
        options={object('Buddy Options', developerOptions)}
        size={sizeKnob()}
      />
      <Form.Checkbox label="I agree to the Terms and Conditions" />
      <Button type="submit">Submit</Button>
    </Form>
  ))
