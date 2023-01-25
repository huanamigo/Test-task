import React from 'react'
import styles from './Search.module.scss'

interface IProps {
  toggleLoad: React.Dispatch<React.SetStateAction<boolean>>
  searchValue: string
  search: React.Dispatch<React.SetStateAction<string>>
  changeURL: React.Dispatch<React.SetStateAction<string>>,
}

const Search = ({toggleLoad, searchValue, search, changeURL}: IProps) => {

  const handleSearch = (e:React.FormEvent<HTMLInputElement>) => {
    toggleLoad(true)
    search(e.currentTarget.value)
    changeURL(`https://reqres.in/api/products?id=${e.currentTarget.value}`)
  }

  return (
    <div className={styles.container}>
        <input type="number" value={searchValue} onChange={(e) => handleSearch(e)}/>
    </div>
  )
}

export default Search