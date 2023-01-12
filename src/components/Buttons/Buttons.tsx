import React, { useEffect } from 'react'
import styles from './Buttons.module.scss'

const Buttons = ({changePage, changeURL, data, currentPage}: any) => {

  const handlePageChange = (action:any) => {
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
      content.push(<button key={i}>{i}</button>);
    }
    return content;

  };

  const handleButtons = (e:any) => {
    if(Number(e.target.innerText) > data.total_pages ) return
    handlePageChange(Number(e.target.innerText))
  }

  return (
    <div className={styles.buttons}>
      <button onClick={() => handlePageChange('prev')}>←</button>
      <div className={styles.numbered} onClick={(e) => handleButtons(e)}>
        {displayPagination()}

      </div>
      <button onClick={() => handlePageChange('next')}>→</button>
    </div>
  )
}

export default Buttons