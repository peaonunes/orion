import PropTypes from 'prop-types'
import React from 'react'

import Button from '../../Button'

export const WizardButtons = {
  BACK: 'back',
  SAVE: 'save',
  NEXT: 'next',
  FINISH: 'finish'
}

const WizardControls = ({ buttons, currentStep, onStepChange, totalSteps }) => {
  const isLastStep = currentStep === totalSteps - 1
  return (
    <div className="wizard-controls">
      {currentStep > 0 &&
        Button.create(buttons[WizardButtons.BACK], {
          autoGenerateKey: false,
          defaultProps: {
            onClick: () => onStepChange(currentStep - 1),
            type: 'button'
          }
        })}
      <div className="wizard-controls-right">
        {buttons[WizardButtons.SAVE] &&
          !isLastStep &&
          Button.create(buttons[WizardButtons.SAVE], {
            autoGenerateKey: false,
            defaultProps: {
              className: 'mr-8',
              ghost: true,
              type: 'submit'
            }
          })}
        {!isLastStep &&
          Button.create(buttons[WizardButtons.NEXT], {
            autoGenerateKey: false,
            defaultProps: {
              className: 'blue',
              onClick: () => onStepChange(currentStep + 1),
              primary: true,
              type: 'submit'
            }
          })}
        {isLastStep &&
          Button.create(buttons[WizardButtons.FINISH], {
            autoGenerateKey: false,
            defaultProps: {
              className: 'blue',
              primary: true,
              type: 'submit'
            }
          })}
      </div>
    </div>
  )
}

WizardControls.propTypes = {
  buttons: PropTypes.shape({
    [WizardButtons.BACK]: PropTypes.any,
    [WizardButtons.SAVE]: PropTypes.any,
    [WizardButtons.NEXT]: PropTypes.any,
    [WizardButtons.FINISH]: PropTypes.any
  }),
  currentStep: PropTypes.number.isRequired,
  onStepChange: PropTypes.func,
  totalSteps: PropTypes.number.isRequired
}

WizardControls.defaultProps = {
  buttons: {
    [WizardButtons.BACK]: 'Back',
    [WizardButtons.NEXT]: 'Next',
    [WizardButtons.FINISH]: 'Finish'
  },
  onStepChange: () => {}
}

export default WizardControls
