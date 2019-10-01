import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { Button, Modal } from '../'

export default {
  title: 'Modal',
  decorators: [withKnobs]
}

export const standard = () => {
  return (
    <Modal trigger={<Button>Open Modal</Button>} closeIcon>
      <Modal.Header content={text('Title', 'Modal Title')} />
      <Modal.Content>
        {text(
          'Content',
          'Your inbox is getting full, would you like us to enable automatic archiving of old messages?'
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button>Cancel</Button>
        <Button primary>Yes</Button>
      </Modal.Actions>
    </Modal>
  )
}
