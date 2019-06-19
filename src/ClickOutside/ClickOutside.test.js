import React from 'react'
import { render } from '@testing-library/react'

import ClickOutside from './'

const originalAddEventListener = document.addEventListener

beforeEach(() => {
  document.addEventListener = jest.fn()
})

afterAll(() => {
  document.addEventListener = originalAddEventListener
})

it('should not call "onClickOutside" if an inner element is clicked', () => {
  const onClickOutside = jest.fn()
  const { getByText } = render(
    <div>
      Outer Content
      <ClickOutside onClickOutside={onClickOutside}>
        <div>Inner Content</div>
      </ClickOutside>
    </div>
  )

  const listener = document.addEventListener.mock.calls[0][1]
  listener({ target: getByText('Inner Content') })
  expect(onClickOutside).not.toBeCalled()
})

it('should call "onClickOutside" if an outer element is clicked', () => {
  const onClickOutside = jest.fn()
  const { container } = render(
    <div>
      Outer Content
      <ClickOutside onClickOutside={onClickOutside}>
        <div>Inner Content</div>
      </ClickOutside>
    </div>
  )

  const listener = document.addEventListener.mock.calls[0][1]
  listener({ target: container.firstChild })
  expect(onClickOutside).toBeCalled()
})
