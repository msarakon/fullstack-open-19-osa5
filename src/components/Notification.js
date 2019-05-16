import React from 'react'

const Notification = ({ message, style }) => {
  if (message === null || message.trim() === '') {
    return null
  }
  
  return (
    <div className={"notification " + style}>
      {message}
    </div>
  )
}

export default Notification