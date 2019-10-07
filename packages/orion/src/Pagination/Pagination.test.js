import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Pagination from './'

describe('Exceptions', () => {
  it('should not render if totalItems <= 1', () => {
    const { container } = render(<Pagination totalItems={1} />)
    expect(container.firstChild).toBeNull()
  })

  it('should not render if pageSize < 1', () => {
    const { container } = render(<Pagination totalItems={40} pageSize={0} />)
    expect(container.firstChild).toBeNull()
  })

  it('should not render if totalItems <= pageSize', () => {
    const { container } = render(<Pagination totalItems={20} pageSize={30} />)
    expect(container.firstChild).toBeNull()
  })

  it('should render first page if activePage is < 1', () => {
    const { queryByText } = render(
      <Pagination activePage={-1} pageSize={10} totalItems={20} />
    )
    const expectedResult = '1-10'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  it('should render last page if activePage bigger than possible', () => {
    const { queryByText } = render(
      <Pagination activePage={5} pageSize={10} totalItems={20} />
    )
    const expectedResult = '11-20'
    expect(queryByText(expectedResult)).toBeTruthy()
  })
})

describe('Happy path', () => {
  it('should show first item as 1 and lastItem as the size of the page when there is no activePage set', () => {
    const { queryByText } = render(<Pagination pageSize={10} totalItems={20} />)
    const expectedResult = '1-10'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  it('should show first item as 11 and last page item as totalItems (15) when active page is 2 and totalItems is 15', () => {
    const { queryByText } = render(
      <Pagination activePage={2} pageSize={10} totalItems={15} />
    )
    const expectedResult = '11-15'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  it('should show first item as 16 and last page item as activePage multiplied by pageSize since it is bigger than totalItems', () => {
    const { queryByText } = render(
      <Pagination activePage={2} totalItems={35} pageSize={15} />
    )
    const expectedResult = '16-30'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  it('should show the total number of items', () => {
    const { queryByText } = render(<Pagination totalItems={35} />)
    const expectedResult = '35'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  describe('buttons', () => {
    it('should show previous button disabled if it is on first page', () => {
      const { queryByTitle } = render(
        <Pagination activePage={1} pageSize={10} totalItems={20} />
      )
      expect(queryByTitle('previous')).toBeDisabled()
    })

    it('should show next button disabled if it is on last page', () => {
      const { queryByTitle } = render(
        <Pagination activePage={2} pageSize={10} totalItems={20} />
      )
      expect(queryByTitle('next')).toBeDisabled()
    })

    it('should show both buttons disabled if disabled prop is passed', () => {
      const { queryByTitle } = render(
        <Pagination activePage={2} disabled pageSize={10} totalItems={50} />
      )
      expect(queryByTitle('previous')).toBeDisabled()
      expect(queryByTitle('next')).toBeDisabled()
    })

    it('should return activePage = 2 if it is on first page and the next button is clicked', () => {
      const handleChange = jest.fn()
      const { queryByTitle } = render(
        <Pagination
          activePage={1}
          pageSize={10}
          totalItems={20}
          onPageChange={handleChange}
        />
      )
      fireEvent.click(queryByTitle('next'))

      expect(handleChange).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          activePage: 2
        })
      )
    })

    it('should return activePage = 1 if it is on second page and the previous button is clicked', () => {
      const handleChange = jest.fn()
      const { queryByTitle } = render(
        <Pagination
          activePage={2}
          pageSize={10}
          totalItems={20}
          onPageChange={handleChange}
        />
      )
      fireEvent.click(queryByTitle('previous'))

      expect(handleChange).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          activePage: 1
        })
      )
    })
  })
})
