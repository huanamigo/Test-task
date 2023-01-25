import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons/Buttons'
import Error from '../Error/Error'
import Modal from '../Modal/Modal'
import Search from '../Search/Search'
import ToReturn from '../ToReturn/ToReturn'
import styles from './Table.module.scss'


const Table = () => {
  const [currentPage, changePage] = useState<number>(1)
  const [baseURL, changeURL] = useState<string>(`https://reqres.in/api/products?per_page=5&page=${currentPage}`)
  const [toShow, toggleShow] = useState<boolean>(false)
  const [chosen, choose] = useState({
    "id": 0,
    "name": "",
    "year": 0,
    "color": "",
    "pantone_value": ""
  })
  const [searchValue, search] = useState('')
  const [isLoading, toggleLoad] = useState(true)
  const [error, addErrorMsg] = useState<string>('')
  const [data, setData] = useState({
    // I haven't found a way to get rid off those placeholders but I also think that it's not the worst part of this code
    "total_pages": 0,
    "data": [
      {
        "id": 0,
        "name": "",
        "year": 0,
        "color": "",
        "pantone_value": ""
      }
    ]
  })

  useEffect(() => {
    const fetchData = async () => {
     
        const res = await fetch(baseURL)
        if (!res.ok) {
          addErrorMsg(String(res.status))
        } else {
          const data = await res.json()
        addErrorMsg('')
        setData(data)
        toggleLoad(false)
        toggleShow(false)
        }
        
    }
    fetchData()
   
  }, [baseURL])

  return (

    <div className={styles.container}>
      <Search toggleLoad={toggleLoad} searchValue={searchValue} search={search} changeURL={changeURL}/>
      {error !== '' ? <Error error={error}/> : <ToReturn data={data} chosen={chosen} choose={choose} isLoading={isLoading} searchValue={searchValue} toShow={toShow} toggleShow={toggleShow}/>}
      <Modal chosen={chosen} toShow={toShow} toggleShow={toggleShow}/>
      {searchValue === '' ? <Buttons data={data} changeURL={changeURL} currentPage={currentPage} changePage={changePage}/> : null}
    </div>
  )
}

export default Table