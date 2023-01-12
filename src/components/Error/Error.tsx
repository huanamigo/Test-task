import React from 'react'

const Error = ({error}: any) => {

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