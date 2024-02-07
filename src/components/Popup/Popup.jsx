import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import ButtonUi from '../../ui/ButtonUi'
import IconButtonSvg from '../../ui/IconButtonSvg'
import NameInputField from '../../ui/NameInputField'
import s from './Popup.module.scss'
import decoration from '../../assets/images/popupDecoration.png'

import ButtonForm from '../../ui/ButtonForm'
import { isPossiblePhoneNumber } from 'react-phone-number-input'

import InputNumber from 'react-phone-number-input/input'
import PhoneNumberField from '../../ui/PhoneNumberField'
import { useNavigate } from 'react-router'

const Popup = React.memo(({ item, name }) => {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [client, setClient] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const [nameError, setNameError] = React.useState(false)
  const [phoneError, setPhoneError] = React.useState(false)

  const handleInputChange = () => {
    const rusLettersRegex = /^[а-яА-ЯёЁ\s]*$/

    if (rusLettersRegex.test(client) && client.length) {
      setNameError(false)
    } else {
      setNameError(true)
    }
  }

  const isValidPhoneNumber = () => {
    phone && isPossiblePhoneNumber(phone)
      ? setPhoneError(false)
      : setPhoneError(true)
  }

  const checkForm = () => {
    handleInputChange()
    isValidPhoneNumber()
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!nameError && !phoneError) {
      console.log({ ...item, client, phone })
      navigate('/thankYou')
      handleClose()
    }
    //логика для отправки на сервер
  }

  return (
    <>
      <ButtonUi name={name} onClick={handleClickOpen} />
      <Dialog
        PaperProps={{
          style: {
            maxWidth: '522px',
            borderRadius: '15px',
            background: '#FFE2E5',
          },
        }}
        fullWidth
        open={open}
        onClose={handleClose}
      >
        <IconButtonSvg onClick={handleClose} />
        <form className={s.popup} onSubmit={handleSubmit}>
          <h2 className={s.title}>Заполните форму</h2>
          <img className={s.image} src={decoration} alt="decoration" />
          <div className={s.buttons}>
            <NameInputField setClient={setClient} nameError={nameError} />
            <InputNumber
              country="RU"
              international
              withCountryCallingCode
              value={phone}
              error={phoneError}
              onChange={setPhone}
              inputComponent={PhoneNumberField}
            />
          </div>
          <ButtonForm onClick={checkForm} />
        </form>
      </Dialog>
    </>
  )
})

export default Popup
