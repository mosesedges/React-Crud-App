import React,{useEffect} from 'react'

const Alert = ({showAlert, type, msg, activities}) => {

  useEffect(()=>{
    const alertOff = setTimeout(()=> {
      showAlert();
    },3000)
    return () => clearTimeout(alertOff)
  },[activities])
  return (
    <div>
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  )
}

export default Alert
