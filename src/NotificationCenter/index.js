import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

import Message from '../Message'

const NotificationCenter = props => {
  return <ToastContainer {...props} />
}

NotificationCenter.defaultProps = {
  autoClose: false,
  closeButton: false,
  hideProgressBar: true,
  position: toast.POSITION.TOP_CENTER,
  className: 'orion-notification-center',
  toastClassName: 'orion-notification-center__toast'
}

export default NotificationCenter

const NotitificationTypes = {
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning'
}

const buildNotification = ({ options, type }) => message => {
  const toastId = `${type}-${message}`
  if (toast.isActive(toastId)) return

  const messageType = { [type]: true }
  toast(
    ({ closeToast }) => (
      <Message content={message} {...messageType} onDismiss={closeToast} />
    ),
    { ...options, toastId }
  )
}

NotificationCenter.error = buildNotification({
  type: NotitificationTypes.ERROR
})

NotificationCenter.success = buildNotification({
  options: {
    autoClose: 5000
  },
  type: NotitificationTypes.SUCCESS
})

NotificationCenter.warning = buildNotification({
  type: NotitificationTypes.WARNING
})
