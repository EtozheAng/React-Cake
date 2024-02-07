import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { selectFilterValue } from '../store/selector'
import { setSort } from '../store/slice'

const SelectUi = () => {
  const list = [
    { name: 'Новизне', value: 'option1' },
    { name: 'Популярности', value: 'rating' },
    { name: 'Возврастанию', value: '-price' },
    { name: 'Убыванию', value: 'price' },
  ]
  const dispatch = useDispatch()
  const value = useSelector(selectFilterValue)

  const handleChange = (item) => {
    dispatch(setSort(item))
    document.cookie = `sortBy=${item.value}`
  }

  function getCookieValue(cookieName) {
    // Разбиение строки с куками на отдельные куки
    var cookies = document.cookie.split(';')

    // Поиск и обработка каждой куки
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim()

      // Проверка, начинается ли кука с нужного ключа
      if (cookie.startsWith(cookieName + '=')) {
        // Получение значения куки
        var cookieValue = cookie.substring(cookieName.length + 1)

        // Декодирование значения
        return decodeURIComponent(cookieValue)
      }
    }
  }

  useEffect(() => {
    if (getCookieValue('sortBy'))
      dispatch(
        setSort(
          ...list.filter((item) => item.value === getCookieValue('sortBy'))
        )
      )
  }, [])

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        sx={{
          color: '#464646',
          fontFamily: 'Montserrat Alternates',
          fontWeight: 500,
          paddingRight: '5px',
          fontSize: '14px',
        }}
      >
        По:{' '}
      </Typography>
      <FormControl>
        <Select
          sx={{
            color: '#464646',
            fontFamily: 'Montserrat Alternates',
            fontWeight: 500,
            paddingRight: '5px',
            fontSize: '14px',
            opacity: 0.5,
          }}
          variant="standard"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          // onChange={handleChange}
        >
          {list.map((item) => (
            <MenuItem
              key={uuidv4()}
              onClick={() => handleChange(item)}
              value={item.value}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectUi
