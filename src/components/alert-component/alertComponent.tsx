import React from 'react'

const alertComponent = (props: IAlertComponentProps) => {
  if(props.type === "success"){
  return (
    <div className="em-c-alert em-c-alert--success" role="alert">
  {/* <svg className="em-c-icon em-c-alert__icon">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../images/em-icons.svg#icon-circle-check"></use>
  </svg> */}
  <div className="em-c-alert__body">
    {props.message}
  </div>
  <div className="em-c-alert__actions">
    <button className="em-c-text-btn em-c-alert--success">
      Close
    </button>
  </div>
</div>
  )
  }
  if(props.type === 'error'){
    return(
<div className="em-c-alert em-c-alert--error" role="alert">
  {/* <svg className="em-c-icon em-c-alert__icon">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../../images/em-icons.svg#icon-warning"></use>
  </svg> */}
  <div className="em-c-alert__body">
    { props.message}
  </div>
  <div className="em-c-alert__actions">
    <button className="em-c-text-btn em-c-alert--error">
      Close
    </button>
  </div>
</div>
    )
  }
}

export default alertComponent;


interface IAlertComponentProps {
  message: string;
  type: string;

}
