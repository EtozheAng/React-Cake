import { Button } from '@mui/material'
import React from 'react'

const ButtonForm = ({ onClick }) => {
  return (
    <Button
      fullWidth
      type="submit"
      onClick={onClick}
      sx={{
        color: '#fff',
        backgroundColor: '#e9657e',
        fontFamily: 'Montserrat Alternates, sans-serif',
        fontWeight: 500,
        fontSize: '16px',
        borderRadius: '200px',
        height: '60px',
        textTransform: 'none',
        '&:hover': {
          background: '#e9657e',
        },
      }}
    >
      Отправить
    </Button>
  )
}

export default ButtonForm
