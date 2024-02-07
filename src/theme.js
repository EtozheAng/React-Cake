import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat Alternates', // Замените на нужный вам шрифт
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 10px',
        },
      },
      defaultProps: {
        disableGutters: true,
      },
    },
  },
})
