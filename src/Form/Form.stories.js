import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, Checkbox, Input, Dropdown, Form } from '../'

storiesOf('Form', module)
  .add('Input', () => (
    <Form>
      <Form.Field>
        <label htmlFor="one">Form Field with input</label>
        <Input id="one" placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Form Field with small input</label>
        <Input size="small" placeholder="First Name" />
      </Form.Field>

      <Form.Input label="Form Input" />
      <Form.Input label="Form Input" size="small" />

      <Form.Field>
        <label>Form Field with input and label</label>
        <Input placeholder="Website" label="https://" />
      </Form.Field>

      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  ))
  .add('Dropdown', () => (
    <Form>
      <Form.Field>
        <label htmlFor="one">Form Field with dropdown</label>
        <Dropdown id="one" placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <label>Form Field with small dropdown</label>
        <Dropdown size="small" placeholder="First Name" />
      </Form.Field>

      <Form.Dropdown label="Form Dropdown" />
      <Form.Dropdown label="Form Dropdown" size="small" />

      <Form.Field>
        <label>Form Field with Dropdown and label</label>
        <Dropdown placeholder="Website" label="https://" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  ))
