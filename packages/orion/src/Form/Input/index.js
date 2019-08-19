import React from 'react'
import { Form } from '@inloco/semantic-ui-react'

import Field from '../Field'
import Input from '../../Input'

const SemanticFormInput = Form.Input

const FormInput = props => (
  <SemanticFormInput {...props} as={Field} control={Input} />
)

Form.Input = FormInput

export default FormInput
