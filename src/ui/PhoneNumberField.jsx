import React from 'react'
import { TextField } from '@mui/material'

const PhoneNumberField = React.forwardRef(({ value, onChange, error }, ref) => {
  return (
    <TextField
      fullWidth
      type="tel"
      error={error}
      inputRef={ref}
      value={value}
      onChange={onChange}
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
})

export default PhoneNumberField
