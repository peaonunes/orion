import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button, Checkbox, Input, Form } from '../'

storiesOf('Form', module).add('basic', () => (
  <Form>
    <Form.Field>
      <Input id="one" placeholder="First Name" />
      <label htmlFor="one">Form Field with input</label>
    </Form.Field>
    <Form.Field>
      <label>Form Field with small input</label>
      <Input size="small" placeholder="First Name" />
    </Form.Field>

    <Form.Input label="Form Input" />
    <Form.Field>
      <label>Form Field with input and label</label>
      <Input placeholder="Website" label="https://" />
    </Form.Field>
    <Form.Field>
      <Checkbox className="blue" label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
))
