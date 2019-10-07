import React from 'react'
import { boolean, object, number, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Pagination from './'

const actions = {
  onPageChange: action('onPageChange')
}

export default {
  title: 'Pagination',
  decorators: [withKnobs],
  excludeStories: ['actions']
}

export const basic = () => (
  <Pagination
    activePage={number('activePage', 1)}
    disabled={boolean('disabled', false)}
    totalItems={number('totalItems', 232)}
    pageSize={number('pageSize', 15)}
    right={boolean('right', false)}
    i18n={object('i18n', {
      of: 'of',
      results: 'results'
    })}
    {...actions}
  />
)

export const disabled = () => (
  <Pagination
    activePage={number('activePage', 1)}
    disabled={boolean('disabled', true)}
    totalItems={number('totalItems', 232)}
    pageSize={number('pageSize', 15)}
    right={boolean('right', true)}
    i18n={object('i18n', {
      of: 'of',
      results: 'results'
    })}
    {...actions}
  />
)

export const right = () => (
  <Pagination
    activePage={number('activePage', 1)}
    disabled={boolean('disabled', false)}
    totalItems={number('totalItems', 232)}
    pageSize={number('pageSize', 15)}
    right={boolean('right', true)}
    i18n={object('i18n', {
      of: 'of',
      results: 'results'
    })}
    {...actions}
  />
)
