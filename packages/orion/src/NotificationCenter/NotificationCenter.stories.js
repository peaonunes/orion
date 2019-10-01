import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Button from '../Button'
import NotificationCenter from '.'

const defaults = {
  errorTitle: 'ErroR',
  errorMessage: 'UnexpectedError',
  successTitle: 'SuccesS'
}
const NotificationCenterDecorator = storyFn => (
  <>
    <NotificationCenter defaults={defaults} />
    {storyFn()}
  </>
)

export default {
  title: 'NotificationCenter',
  decorators: [withKnobs, NotificationCenterDecorator]
}

export const basic = () => (
  <>
    <div className="mb-16">
      <Button
        onClick={() => {
          NotificationCenter.error("Everything is wrong, isn't it?")
        }}>
        Notify Error
      </Button>
    </div>
    <div className="mb-16">
      <Button
        onClick={() => {
          NotificationCenter.success("Everything is awesome, isn't it?")
        }}>
        Notify Success
      </Button>
    </div>
    <div className="mb-16">
      <Button
        onClick={() => {
          NotificationCenter.warning("DON'T TOUCH IT!!!")
        }}>
        Notify Warning
      </Button>
    </div>
    <div className="mb-16">
      <Button
        onClick={() => {
          NotificationCenter.inlineError("Everything is wrong, isn't it?")
        }}>
        Notify Inline Error
      </Button>
    </div>
    <div className="mb-16">
      <Button
        onClick={() => {
          NotificationCenter.inlineSuccess("Everything is awesome, isn't it?")
        }}>
        Notify Inline Success
      </Button>
    </div>
    <div>
      <Button
        onClick={() => {
          NotificationCenter.inlineWarning("DON'T TOUCH IT!!!")
        }}>
        Notify Inline Warning
      </Button>
    </div>
  </>
)
