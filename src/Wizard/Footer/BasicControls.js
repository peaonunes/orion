import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Button from '../../Button'

const Buttons = {
  CANCEL: 'cancel',
  PREVIOUS: 'previous',
  SAVE: 'save',
  NEXT: 'next',
  FINISH: 'finish'
}

class WizardFooterBasicControls extends Component {
  static propTypes = {
    currentStep: PropTypes.number.isRequired,
    buttons: PropTypes.shape({
      [Buttons.CANCEL]: PropTypes.any,
      [Buttons.PREVIOUS]: PropTypes.any,
      [Buttons.SAVE]: PropTypes.any,
      [Buttons.NEXT]: PropTypes.any,
      [Buttons.FINISH]: PropTypes.any
    }),
    onCancel: PropTypes.func,
    onChangeStep: PropTypes.func.isRequired,
    onFinish: PropTypes.func,
    onSave: PropTypes.func,
    showBackOnFirstStep: PropTypes.bool,
    showSaveButton: PropTypes.bool,
    totalSteps: PropTypes.number.isRequired
  }

  static defaultProps = {
    buttons: {
      [Buttons.CANCEL]: 'Cancel',
      [Buttons.PREVIOUS]: 'Previous',
      [Buttons.SAVE]: 'Save',
      [Buttons.NEXT]: 'Next',
      [Buttons.FINISH]: 'Finish'
    }
  }

  static Buttons = Buttons

  render() {
    const {
      currentStep,
      buttons,
      onCancel,
      onFinish,
      onSave,
      showBackOnFirstStep,
      showSaveButton,
      totalSteps
    } = this.props
    const isLastStep = currentStep === totalSteps - 1
    return (
      <React.Fragment>
        {this.getButton(buttons[Buttons.CANCEL], {
          onClick: onCancel,
          type: 'button'
        })}
        {showSaveButton &&
          !isLastStep &&
          this.getButton(buttons[Buttons.SAVE], {
            onClick: onSave,
            type: 'submit'
          })}
        {(currentStep > 0 || showBackOnFirstStep) &&
          this.getButton(buttons[Buttons.PREVIOUS], {
            onClick: this.handlePrevious,
            type: 'button'
          })}
        {!isLastStep &&
          this.getButton(buttons[Buttons.NEXT], {
            primary: true,
            onClick: this.handleNext,
            type: 'submit'
          })}
        {isLastStep &&
          this.getButton(buttons[Buttons.FINISH], {
            primary: true,
            onClick: onFinish,
            type: 'submit'
          })}
      </React.Fragment>
    )
  }

  getButton = (options, defaultProps) => {
    if (React.isValidElement(options)) {
      return options
    }

    const customProps = _.isString(options) ? { content: options } : options
    return <Button {...defaultProps} {...customProps} />
  }

  handleNext = () => {
    const { currentStep, onChangeStep } = this.props
    onChangeStep(currentStep + 1)
  }

  handlePrevious = () => {
    const { currentStep, onChangeStep } = this.props
    onChangeStep(currentStep - 1)
  }
}

export default WizardFooterBasicControls
