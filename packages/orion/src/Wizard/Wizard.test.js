import React from 'react'
import { render } from '@testing-library/react'

import Wizard from './'

const STEPS = ['Step 1', 'Step 2', 'Step 3']
const STEP_PAGES = (
  <React.Fragment>
    <div>Page 1</div>
    <div>Page 2</div>
    <div>Page 3</div>
  </React.Fragment>
)

it('should render the steps', () => {
  const { queryByText } = render(<Wizard steps={STEPS}>{STEP_PAGES}</Wizard>)
  expect(queryByText('Step 1')).toBeTruthy()
  expect(queryByText('Step 2')).toBeTruthy()
  expect(queryByText('Step 3')).toBeTruthy()
})
