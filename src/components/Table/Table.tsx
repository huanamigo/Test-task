import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons/Buttons'
import Error from '../Error/Error'
import Modal from '../Modal/Modal'
import Search from '../Search/Search'
import ToReturn from '../ToReturn/ToReturn'
import styles from './Table.module.scss'

const Table = () => {
  const [currentPage, changePage] = useState(1)
  const [baseURL, changeURL] = useState(`https://reqres.in/api/products?per_page=5&page=${currentPage}`)
  const [toShow, toggleShow] = useState(0)
  const [chosen, choose] = useState({"id": 0,
  "name": "placeholder",
  "year": "placeholder",
  "color": "fff",
  "pantone_value": "placeholder"})
  const [searchValue, search] = useState('')
  const [isLoading, toggleLoad] = useState(true)
  const [error, addErrorMsg] = useState('false')
  const [data, setData] = useState({
    //this is only placeholder for the rest code to work
    "total_pages": 1,
    "data": [
      {
        "id": 0,
        "name": "placeholder",
        "year": "placeholder",
        "color": "fff",
        "pantone_value": "placeholder"
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
        addErrorMsg('false')
        setData(data)
        toggleLoad(false)
        toggleShow(0)
        }
        
    }
    fetchData()
   
  }, [baseURL])

  return (

    <div className={styles.container}>
      <Search isLoading={isLoading} toggleLoad={toggleLoad} searchValue={searchValue} search={search} changeURL={changeURL}/>
      {error !== 'false' ? <Error error={error}/> : <ToReturn data={data} chosen={chosen} choose={choose} isLoading={isLoading} searchValue={searchValue} toShow={toShow} toggleShow={toggleShow}/>}
      <Modal chosen={chosen} toShow={toShow} toggleShow={toggleShow}/>
      {searchValue === '' ? <Buttons data={data} baseURL={baseURL} changeURL={changeURL} currentPage={currentPage} changePage={changePage}/> : null}
    </div>
  )
}

export default Table