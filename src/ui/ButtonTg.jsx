import { Button } from '@mui/material'
import React from 'react'
import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector'

const ButtonTg = ({ className }) => {
  return (
    <Button
      className={className}
      href="https://t.me/EtozheAng"
      sx={{
        width: '100%',
        color: '#464646',
        backgroundColor: '#6dcdf7',
        fontFamily: 'Montserrat Alternates, sans-serif',
        fontWeight: 500,
        fontSize: '16px',
        borderRadius: '200px',
        height: '60px',
        textTransform: 'none',
        '&:hover': {
          background: '#6dcdf7',
        },
      }}
      endIcon={<GlobalSvgSelector id="telegram" />}
    >
      Написать в
    </Button>
  )
}

export default ButtonTg
