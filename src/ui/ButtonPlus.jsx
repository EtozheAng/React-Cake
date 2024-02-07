import { IconButton } from '@mui/material'
import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector'

const ButtonPlus = ({ increment, disabled }) => {
  return (
    <IconButton disabled={disabled} onClick={increment}>
      <GlobalSvgSelector id="plusButton" />
    </IconButton>
  )
}

export default ButtonPlus
