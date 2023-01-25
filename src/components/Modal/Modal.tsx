import React, { useEffect } from 'react'
import styles from './Modal.module.scss'

interface IProps  {
  chosen:{name: string, id: number, year: number, color:string, pantone_value:string}, 
  toShow:boolean, 
  toggleShow:React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ( {chosen, toShow, toggleShow} : IProps ) => {

  const exitModal = () => {
    toggleShow(false)
  }

  useEffect(() => {
    document.addEventListener("keydown", exitModal, false);

    return () => {
      document.removeEventListener("keydown", exitModal, false);
    };
  });

  return (
      <dialog id='modal' className={styles.modal} key={chosen.id} open={toShow} >
        <div className={styles.container} style={{color: `${chosen.color}`, borderColor: `${chosen.color}`}}>
            <p>Item ID: <span>{chosen.id}</span></p>
            <p>Item name: <span>{chosen.name}</span></p>
            <p>Item year: <span>{chosen.year}</span></p>
            <p>Item color: <span>{chosen.color}</span></p>
            <p>Item pantone value: <span>{chosen.pantone_value}</span></p>
            <button onClick={() => toggleShow(false)} style={{color:`${chosen.color}`}}>x</button>
        </div>
      </dialog> 
      
    
    
  )
}

export default Modal