import { IconButton } from '@mui/material'
import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector'

const ButtonSvg = ({ svgId, onClick, disabled, className }) => {
  return (
    <IconButton
      sx={{ p: 0 }}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      <GlobalSvgSelector id={svgId} />
    </IconButton>
  )
}

export default ButtonSvg
