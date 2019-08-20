import React from 'react'
import { Form } from '@inloco/semantic-ui-react'

import Field from '../Field'
import Dropdown from '../../Dropdown'

const SemanticFormDropdown = Form.Dropdown

const FormDropdown = props => (
  <SemanticFormDropdown {...props} as={Field} control={Dropdown} />
)

Form.Dropdown = FormDropdown

export default FormDropdown
