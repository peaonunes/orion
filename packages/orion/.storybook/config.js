import { configure } from '@storybook/react'

import '../dist/orion.css'
import './main.css'

const req = require.context('../src', true, /.stories.js$/)

configure(req, module)
