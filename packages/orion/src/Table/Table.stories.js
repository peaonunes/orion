import _ from 'lodash'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import { Table } from '../'

const DEFAULT_HEADERS = ['Name', 'Project']
const DEFAULT_DATA = [['Maíra', 'Insights'], ['Gileno', 'Accounts']]

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const headers = object('Headers', DEFAULT_HEADERS)
    const data = object('Data', DEFAULT_DATA)
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            {_.map(headers, (title, index) => (
              <Table.HeaderCell key={index}>{title}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, (row, index) => (
            <Table.Row key={index}>
              <Table.Cell>{row[0]}</Table.Cell>
              <Table.Cell>{row[1]}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  })
