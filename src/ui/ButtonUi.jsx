import { Button } from '@mui/material'
import React from 'react'

const ButtonUi = ({ onClick, name }) => {
  return (
    <Button
      sx={{
        width: '100%',
        color: '#fff',
        backgroundColor: '#e9657e',
        fontFamily: 'Montserrat Alternates, sans-serif',
        fontWeight: 500,
        fontSize: '16px',
        borderRadius: '200px',
        height: '60px',
        // width: '216px',
        textTransform: 'none',
        '&:hover': {
          background: '#e9657e',
        },
      }}
      onClick={onClick}
    >
      {name ? name : 'Заказать в 1 клик'}
    </Button>
  )
}

export default ButtonUi
