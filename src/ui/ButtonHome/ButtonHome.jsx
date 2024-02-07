import React from 'react'
import { Link } from 'react-router-dom'
import s from './ButtonHome.module.scss'
import { Button } from '@mui/material'

const ButtonHome = ({ color }) => {
  return (
    // <Link to="/">
    <Button
      sx={{
        width: '100%',
        color: color,
        border: `1px solid ${color}`,
        fontWeight: 500,
        fontSize: '16px',
        borderRadius: '200px',
        height: '60px',
        textTransform: 'none',
        // '&:hover': {
        //   background: '#e9657e',
        // },
      }}
    >
      Перейти на главную
    </Button>
    // </Link>
  )
}

export default ButtonHome
