import React from 'react'
import styles from './ToReturn.module.scss'

interface IProps {
  data: {
    total_pages: number, 
    data: {id: number, name: string, year: number, color: string, pantone_value: string}[] | {id: number, name: string, year: number, color: string, pantone_value: string},
  } ,
  chosen:{name: string, id: number, year: number, color:string, pantone_value:string}, 
  toShow:boolean, 
  toggleShow:React.Dispatch<React.SetStateAction<boolean>>
  choose: React.Dispatch<React.SetStateAction<{id: number; name: string;year: number;color: string;pantone_value: string;}>>,
  isLoading: boolean,
  searchValue: string
}

interface IElement {
  id: number, 
  name: string, 
  year: number, 
  color: string, 
  pantone_value: string
}





const ToReturn = ({data, chosen, toShow, toggleShow, choose, isLoading, searchValue}: IProps) => {

  const handleShow = (element:IElement) => {
    if (element === chosen && toShow === true)  {
      toggleShow(false)
    }
    choose(element)
    if (toShow === false) {
       toggleShow(true)
    }
   
  }

  
  return (
    <div>
      {
    searchValue === '' ? (
    <div>
      {
      isLoading ? (
       <p>Loading...</p>
      ) : (
      <div>
        {Array.isArray(data.data) ? (
        <div>
          {data.data.map((el:IElement) => {
            return (
            <div key={el.id} className={styles.item} style={{background: `${el.color}`}} onClick={() => handleShow(el)}>
              <p>Item ID: <span>{el.id}</span></p>
              <p>Item name: <span>{el.name}</span></p>
              <p>Item year: <span>{el.year}</span></p>
            </div>
            )
          })}
        </div>
        ) : (
        <p>Something went wrong!</p>
        )}  
      </div>
      )
    }
    </div>
    ) : (
      <div>
        {
        isLoading ? (
         <p>Loading...</p>
        ) : (
          <div>
            {!Array.isArray(data.data) ? (
            <div className={styles.item} style={{background: `${data.data.color}`}} onClick={() => {
              if(!Array.isArray(data.data)) {
                handleShow(data.data)
              }
            }}>
              <p>Item ID: <span>{data.data.id}</span></p>
              <p>Item name: <span>{data.data.name}</span></p>
              <p>Item year: <span>{data.data.year}</span></p>
            </div>
            ) : (
            <p>Something went wrong!</p>
            )}  
          </div>
          ) 
          
          
        
      }
      </div>
      )
  }
    </div>
    
  )
}

export default ToReturn