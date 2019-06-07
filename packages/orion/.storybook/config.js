import { configure } from '@storybook/react'

import '../dist/orion.css'
import './main.css'

const req = require.context('../stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
