import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Filter from './'

const childFn = ({ onChange, value }) => (
  <input
    onChange={event => onChange(event.target.value)}
    placeholder="Input"
    value={value || ''}
  />
)

it('should open/close the popup when the trigger is clicked', () => {
  const triggerText = 'Open'
  const { getByText } = render(<Filter text={triggerText}>{childFn}</Filter>)

  fireEvent.click(getByText(triggerText))
  expect(getByText(triggerText)).toHaveClass('active')

  fireEvent.click(getByText(triggerText))
  expect(getByText(triggerText)).not.toHaveClass('active')
})

describe('when an initial value is given', () => {
  const initialValue = 'Initial value'

  it('should render the initial value in the trigger', () => {
    const { queryByText } = render(
      <Filter text="Open" initialValue={initialValue}>
        {childFn}
      </Filter>
    )
    expect(queryByText(initialValue)).toBeTruthy()
  })

  it("should pass the given initial value to the filter's contents", () => {
    const { getByText, getByPlaceholderText } = render(
      <Filter text="Open" initialValue={initialValue}>
        {childFn}
      </Filter>
    )

    fireEvent.click(getByText(initialValue))
    const input = getByPlaceholderText('Input')
    expect(input.value).toEqual(initialValue)
  })
})

describe('when a value is given', () => {
  const value = 'Controlled value'

  it('should render the given value in the trigger', () => {
    const { queryByText } = render(
      <Filter text="Open" value={value}>
        {childFn}
      </Filter>
    )
    expect(queryByText(value)).toBeTruthy()
  })

  it("should pass the given value to the filter's contents", () => {
    const { getByText, getByPlaceholderText } = render(
      <Filter text="Open" value={value}>
        {childFn}
      </Filter>
    )

    fireEvent.click(getByText(value))
    const input = getByPlaceholderText('Input')
    expect(input.value).toEqual(value)
  })

  describe('when the given "value" prop changes', () => {
    it('should use this new given value in the trigger', () => {
      const { queryByText, rerender } = render(
        <Filter text="Open" value={value}>
          {childFn}
        </Filter>
      )

      const newValue = 'New controlled value'
      rerender(
        <Filter text="Open" value={newValue}>
          {childFn}
        </Filter>
      )
      expect(queryByText(newValue)).toBeTruthy()
    })
  })
})

describe("when the filter's value changes", () => {
  const newValue = 'New Value'
  let onApply
  let onClear
  let renderResult

  beforeEach(() => {
    onApply = jest.fn()
    onClear = jest.fn()
    renderResult = render(
      <Filter text="Open" onApply={onApply} onClear={onClear}>
        {childFn}
      </Filter>
    )
    const { getByPlaceholderText, getByText } = renderResult

    // Open the popup.
    fireEvent.click(getByText('Open'))

    // Type on the input.
    const input = getByPlaceholderText('Input')
    fireEvent.change(input, { target: { value: newValue } })
  })

  it('should not call "onApply" with the new value', () => {
    expect(onApply).not.toHaveBeenCalled()
  })

  describe('when the "apply" button is clicked', () => {
    beforeEach(() => {
      const { getByText } = renderResult
      fireEvent.click(getByText('Apply'))
    })

    it('should render the selected value in the trigger', () => {
      const { queryByText } = renderResult
      expect(queryByText(newValue)).toBeTruthy()
    })

    it('should call "onApply" with the new value', () => {
      expect(onApply).toHaveBeenCalledWith(newValue)
    })
  })

  describe('when the "clear" button is clicked', () => {
    beforeEach(() => {
      const { getByText } = renderResult
      fireEvent.click(getByText('Clear'))
    })

    it('should not call "onApply" with the new value', () => {
      expect(onApply).not.toHaveBeenCalled()
    })

    it('should call "onClear"', () => {
      expect(onClear).toHaveBeenCalled()
    })
  })
})
