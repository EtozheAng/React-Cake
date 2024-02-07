import React from 'react'
import { TextField } from '@mui/material'

const NameInputField = ({ setClient, nameError }) => {
  return (
    <TextField
      fullWidth
      error={nameError}
      onChange={(event) => setClient(event.target.value)}
      placeholder="Имя"
      inputProps={{
        maxLength: 16,
        autoComplete: 'off',
      }}
      sx={{
        height: '100%',
        borderRadius: '2000px',
        backgroundColor: '#fff',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderRadius: '2000px',
          },
        },
      }}
    />
  )
}

export default NameInputField
