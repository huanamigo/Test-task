import React, { useEffect } from 'react'
import styles from './Buttons.module.scss'

interface IProps {
  data: {
    total_pages: number, 
    data: {id: number,name: string,year: number,color: string,pantone_value: string}[],
  }
  changeURL: React.Dispatch<React.SetStateAction<string>>,
  changePage: React.Dispatch<React.SetStateAction<number>>,
  currentPage: number
}

const Buttons = ({changePage, changeURL, data, currentPage}: IProps) => {

  
  const handlePageChange = (action:string | number) => {
    if(action === 'prev') {
      if (currentPage === 1) return
      changePage(currentPage - 1)
    } else if (action === 'next') {
      if (currentPage === data.total_pages) return
      changePage(currentPage + 1)
    } else if (typeof action === 'number') {
      changePage(action)
    } 
   }

  useEffect(() => {
    changeURL(`https://reqres.in/api/products?per_page=5&page=${currentPage}`)
  })

  const displayPagination = () => {
    let content = [];
    for (let i = 1; i <= data.total_pages; i++) {
      content.push(<button onClick={(e) => handleButtons(e)} key={i}>{i}</button>);
    }
    return content;

  };

  const handleButtons = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
    if(Number(e.currentTarget.innerText) > data.total_pages ) return
    handlePageChange(Number(e.currentTarget.innerText))
  }

  return (
    <div className={styles.buttons}>
      <button onClick={() => handlePageChange('prev')}>←</button>
      <div className={styles.numbered}>
        {displayPagination()}

      </div>
      <button onClick={() => handlePageChange('next')}>→</button>
    </div>
  )
}

export default Buttons