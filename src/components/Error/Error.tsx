import React from 'react'

interface IError {
  error: string
}

const Error = ({error}: IError) => {

  const handleError = () => {
    if(error === '404') return "There is no such ID"
    else return "Error occured! Server responded with status of " + error
  } 

  return (
    <div style={{textAlign: "center"}}>
      {handleError()}
    </div>
  )
}

export default Error