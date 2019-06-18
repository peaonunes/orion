import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Form, Input, Dropdown } from '../..'

const label = 'Full name'
const id = 'fullName'
const placeholder = 'Enter your full name'

const floatingLabelCssClass = 'floatingLabel'

describe('When the fields are passed as child', () => {
  it('should have a floating label when the child is an Input and the size is default', () => {
    const { container } = render(
      <Form.Field>
        <label htmlFor={id}>{label}</label>
        <Input id={id} placeholder={placeholder} />
      </Form.Field>
    )

    expect(
      container.firstChild.classList.contains(floatingLabelCssClass)
    ).toBeTruthy()
  })

  it('should have a floating label when the child is an Dropdown and the size is default', () => {
    const { container } = render(
      <Form.Field>
        <label htmlFor={id}>{label}</label>
        <Dropdown id={id} placeholder={placeholder} />
      </Form.Field>
    )

    expect(
      container.firstChild.classList.contains(floatingLabelCssClass)
    ).toBeTruthy()
  })

  it('should not have a floating label when the child is an Input and the size is small', () => {
    const { container } = render(
      <Form.Field>
        <label htmlFor={id}>{label}</label>
        <Input size="small" id={id} placeholder={placeholder} />
      </Form.Field>
    )

    expect(
      container.firstChild.classList.contains(floatingLabelCssClass)
    ).toBeFalsy()
  })
})

describe('When the fields are passed as control', () => {
  it('should have a floating label when the control is an Input and the size is default', () => {
    const { container } = render(
      <Form.Input label={label} id={id} placeholder={placeholder} />
    )

    expect(
      container.firstChild.classList.contains(floatingLabelCssClass)
    ).toBeTruthy()
  })

  it('should have a floating label when the control is an Dropdown and the size is default', () => {
    const { container } = render(
      <Form.Dropdown label={label} id={id} placeholder={placeholder} />
    )

    expect(
      container.firstChild.classList.contains(floatingLabelCssClass)
    ).toBeTruthy()
  })

  it('should not have a floating label when the control is an Dropdown and the size is small', () => {
    const { container } = render(
      <Form.Dropdown
        label={label}
        id={id}
        size="small"
        placeholder={placeholder}
      />
    )

    expect(
      container.firstChild.classList.contains(floatingLabelCssClass)
    ).toBeFalsy()
  })
})

describe('onChange callback should be called', () => {
  it('child case', () => {
    const onChangeMock = jest.fn()
    const { queryByLabelText } = render(
      <Form.Field>
        <label htmlFor={id}>{label}</label>
        <Input id={id} placeholder={placeholder} onChange={onChangeMock} />
      </Form.Field>
    )

    const value = 'John Doe'
    fireEvent.change(queryByLabelText(label), {
      target: { value }
    })

    expect(onChangeMock).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        value
      })
    )
  })

  it('control case', () => {
    const onChangeMock = jest.fn()
    const { queryByLabelText } = render(
      <Form.Input
        label={label}
        id={id}
        placeholder={placeholder}
        onChange={onChangeMock}
      />
    )

    const value = 'John Doe'

    fireEvent.change(queryByLabelText(label), {
      target: { value }
    })

    expect(onChangeMock).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        value
      })
    )
  })
})
