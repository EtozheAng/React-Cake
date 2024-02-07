import { Autocomplete, TextField } from '@mui/material'

const ToppingSelect = ({ onClick, onChange, value, error }) => {
  const options = [
    {
      label: 'Красный бархат',
      description:
        'Насыщенные сметанные коржи, сливочно-сырный крем и классическая прослойка из малины (можно из вишни, клубники)',
    },
    {
      label: 'Фирменный торт',
      description:
        'Ванильный бисквит, сливочно-сырный крем, прослойка из натуральной варёной сгущёнки, прослойка из безе, прослойка из 100% фундучной пасты (можно сделать с добавлением грецкого ореха)',
    },
    {
      label: 'Шоколадно-йогуртовый с малиной',
      description:
        'Шоколадно-йогуртовый с малиной  шоколадный бисквит, йогуртовый крем и прослойка мусс с малиной',
    },
  ]
  return (
    <Autocomplete
      value={value}
      autoHighlight={true}
      disablePortal
      autoComplete={true}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      id="combo-box"
      options={options}
      onChange={onChange}
      onClick={onClick}
      sx={{
        width: 210,
        marginRight: 1,
        '.MuiInputBase-root': {
          borderRadius: '20px',
          padding: '3px 55px 3px 10px',
          background: '#fff',
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error} // Устанавливаем состояние ошибки для TextField
          helperText={error ? 'Выбирите начинку' : ''}
        />
      )}
    />
  )
}

export default ToppingSelect
