import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import StepsNav from '../StepsNav'
import WizardControls from './WizardControls'

const Wizard = ({
  children,
  className,
  currentStep: currentStepProp,
  onStepChange,
  steps
}) => {
  const [currentStepState, setCurrentStepState] = useState(currentStepProp || 0)
  const currentStep = _.isNil(currentStepProp)
    ? currentStepState
    : currentStepProp

  const handleStepChange = newStep => {
    setCurrentStepState(newStep)
    onStepChange(newStep)
  }

  return (
    <div className={cx('orion wizard', className)}>
      <StepsNav currentStep={currentStep} steps={steps} />
      <div className="wizard-step">
        {React.Children.toArray(children)[currentStep]}
      </div>

      <WizardControls
        currentStep={currentStep}
        onStepChange={handleStepChange}
        totalSteps={steps.length}
      />
    </div>
  )
}

Wizard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  currentStep: PropTypes.number,
  onStepChange: PropTypes.func,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired
}

Wizard.defaultProps = {
  onStepChange: () => {}
}

export default Wizard
