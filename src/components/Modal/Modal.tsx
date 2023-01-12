import React from 'react'
import styles from './Modal.module.scss'

const Modal = ({ chosen, toShow, toggleShow}: any) => {
  return (
    <div className={styles.modal} key={chosen.name} style={{opacity: `${toShow}`, color:`${chosen.color}`}}>
       <p>Item ID: <span>{chosen.id}</span></p>
       <p>Item name: <span>{chosen.name}</span></p>
        <p>Item year: <span>{chosen.year}</span></p>
         <p>Item color: <span>{chosen.color}</span></p>
        <p>Item pantone value: <span>{chosen.pantone_value}</span>
        </p>
        <button onClick={() => toggleShow(0)} style={{color:`${chosen.color}`}}>x</button>
    </div> 
    
  )
}

export default Modal