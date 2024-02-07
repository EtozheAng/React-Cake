import React from 'react'
import { Link } from 'react-router-dom'
import { Pagination, PaginationItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../store/slice'

// Компонент пагинации
const CustomPagination = () => {
  const dispatch = useDispatch()
  const totalPages = 2

  return (
    <Pagination
      sx={{
        '.MuiPagination-ul': {
          justifyContent: 'center',
        },
      }}
      count={totalPages}
      onChange={(_, num) => dispatch(setCurrentPage(num))}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`?page=${item.page}`}
          {...item}
          shape="rounded"
          icon={item.selected ? null : <span>&bull;</span>}
        />
      )}
    />
  )
}

export default CustomPagination
