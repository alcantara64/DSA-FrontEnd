import React from 'react'
import classes from './spinner.module.css'
import  icon_spinner from '../../assets/images/icon_spinner.svg'

 const Spinner =() => {
   console.log(classes, "Classes in Spinner")
  return (
   <div className={classes.emCLoader}>
  <img src={icon_spinner} alt="loading..."/>
  </div>
  )
}

export default Spinner