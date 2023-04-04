import React from 'react'
import { useTranslation } from 'react-i18next'
import { Pagination } from 'react-bootstrap'

type TableDataPaginationProps = {
  currentPage: number
  numberOfPages: number
  changePage(page: number): void
}

function TableDataPagination({ currentPage, numberOfPages, changePage }: TableDataPaginationProps) {
  const { t } = useTranslation()

  return (
    <Pagination>
      {numberOfPages > 0 && <Pagination.First onClick={() => changePage(0)} /> }
      {currentPage - 1 >= 0 && <Pagination.Prev onClick={() => changePage(currentPage - 1)} />}
      {numberOfPages > 0 && <Pagination.Item active={currentPage === 0}  onClick={() => changePage(0)}>{1}</Pagination.Item> }
      {numberOfPages > 5 && <Pagination.Ellipsis /> }

      {numberOfPages > 4 && <Pagination.Item active={currentPage === Math.floor(numberOfPages / 2) - 2} onClick={() => changePage(Math.floor(numberOfPages / 2) - 2)}>{Math.floor(numberOfPages / 2) - 1}</Pagination.Item>}
      {numberOfPages > 3 && <Pagination.Item active={currentPage === Math.floor(numberOfPages / 2) - 1} onClick={() => changePage(Math.floor(numberOfPages / 2) - 1)}>{Math.floor(numberOfPages / 2)}</Pagination.Item>}
      {numberOfPages > 2 && <Pagination.Item active={currentPage === Math.floor(numberOfPages / 2)} onClick={() => changePage(Math.floor(numberOfPages / 2))}>{Math.floor(numberOfPages / 2) + 1}</Pagination.Item>}
      {numberOfPages > 3 && <Pagination.Item active={currentPage === Math.floor(numberOfPages / 2) + 1} onClick={() => changePage(Math.floor(numberOfPages / 2) + 1)}>{Math.floor(numberOfPages / 2) + 2}</Pagination.Item>}
      {numberOfPages > 4 && <Pagination.Item active={currentPage === Math.floor(numberOfPages / 2) + 2} onClick={() => changePage(Math.floor(numberOfPages / 2) + 2)}>{Math.floor(numberOfPages / 2) + 3}</Pagination.Item>}

      {numberOfPages > 3 && <Pagination.Ellipsis /> }
      {numberOfPages > 2 && <Pagination.Item active={currentPage === (numberOfPages - 1)} onClick={() => changePage(numberOfPages - 1)}>{numberOfPages}</Pagination.Item> }
      {currentPage + 1 < numberOfPages && <Pagination.Next onClick={() => changePage(currentPage + 1)} />}
      {numberOfPages > 0 && <Pagination.Last onClick={() => changePage(numberOfPages)} />}
    </Pagination>
  )
}

export default TableDataPagination
