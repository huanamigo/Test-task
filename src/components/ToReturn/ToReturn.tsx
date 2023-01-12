import React from 'react'
import styles from './ToReturn.module.scss'

const ToReturn = ({data, chosen, toShow, toggleShow, choose, isLoading, searchValue}:any) => {

  const handleShow = (element:any) => {
    if (element === chosen && toShow === 1)  {
      toggleShow(0)
    }
    choose(element)
    if (toShow === 0) {
       toggleShow(1)
    }
   
  }

  
  return (
    <div>
      {
    searchValue === '' ? (<div>
      {
      isLoading ? (
       <p>Loading...</p>
      ) : (
        data.data.map((el:any) => {
      return (
        <div key={el.id} className={styles.item} style={{background: `${el.color}`}} onClick={() => handleShow(el)}>
          <p>Item ID: <span>{el.id}</span></p>
          <p>Item name: <span>{el.name}</span></p>
          <p>Item year: <span>{el.year}</span></p>
        </div>
        )
      })
      )
    }
    </div>) : (
      <div key={data.data.id} className={styles.item} style={{background: `${data.data.color}`}} onClick={() => handleShow(data.data)}>
      <p>Item ID: <span>{data.data.id}</span></p>
      <p>Item name: <span>{data.data.name}</span></p>
      <p>Item year: <span>{data.data.year}</span></p>
    </div>
    )
  }
    </div>
    
  )
}

export default ToReturn