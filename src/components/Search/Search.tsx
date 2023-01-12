import React from 'react'
import styles from './Search.module.scss'

const Search = ({toggleLoad, searchValue, search, changeURL}:any) => {

  const handleSearch = (e:any) => {
    toggleLoad(true)
    search(e.target.value)
    changeURL(`https://reqres.in/api/products?id=${e.target.value}`)
  }

  return (
    <div className={styles.container}>
        <input type="number" value={searchValue} onChange={(e) => handleSearch(e)}/>
    </div>
  )
}

export default Search