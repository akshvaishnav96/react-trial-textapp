import React from 'react'

function alert(props) {
  return (
       props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.msg}
        </div>
  )
}

export default alert
