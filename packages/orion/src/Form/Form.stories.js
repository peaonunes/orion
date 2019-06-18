import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

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
        <label htmlFor="fullName">{text('Input label', 'Full Name')}</label>
        <Input
          fluid={boolean('Fluid', false)}
          id="fullName"
          placeholder={text('Input placholder', 'Enter your full name')}
          size={sizeKnob()}
          onChange={action('onChange')}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="buddy">{text('Dropdown label', 'Buddy')}</label>
        <Dropdown
          selection
          id="buddy"
          fluid={boolean('Fluid', false)}
          placeholder={text('Dropdown placeholder', 'Choose your buddy')}
          options={object('Dropdown options', developerOptions)}
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
        label={text('Input label', 'Full Name')}
        placeholder={text('Input placholder', 'Enter your full name')}
        size={sizeKnob()}
        onChange={action('onChange')}
      />
      <Form.Dropdown
        selection
        fluid={boolean('Fluid', false)}
        id="buddy"
        label={text('Dropdown label', 'Buddy')}
        placeholder={text('Dropdown placeholder', 'Choose your buddy')}
        options={object('Dropdown options', developerOptions)}
        size={sizeKnob()}
      />
      <Form.Checkbox label="I agree to the Terms and Conditions" />
      <Button type="submit">Submit</Button>
    </Form>
  ))
