import { radios } from '@storybook/addon-knobs'

import { Sizes } from './sizes'

export const sizeKnob = (defaultValue = Sizes.DEFAULT, groupId) =>
  radios(
    'Size',
    { Default: Sizes.DEFAULT, Small: Sizes.SMALL },
    defaultValue,
    groupId
  )
