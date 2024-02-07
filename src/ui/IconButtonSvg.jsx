import { IconButton } from '@mui/material'
import GlobalSvgSelector from '../assets/icons/GlobalSvgSelector'

const IconButtonSvg = ({ onClick }) => {
  return (
    <IconButton
      aria-label="close"
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
      }}
    >
      <GlobalSvgSelector id="close" />
    </IconButton>
  )
}

export default IconButtonSvg
