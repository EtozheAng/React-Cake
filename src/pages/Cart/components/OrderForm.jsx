import React from 'react'
import s from './Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import NameInputField from '../../../ui/NameInputField'
import ButtonForm from '../../../ui/ButtonForm'
import PhoneInputField from '../../../components/PhoneInputField/PhoneInputField'
import { selectCakeCart } from '../store/selectors'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import { useNavigate } from 'react-router'
import { removeCart } from '../store/slice'

const OrderForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartCake = useSelector(selectCakeCart)

  const [client, setClient] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const [nameError, setNameError] = React.useState(null)
  const [phoneError, setPhoneError] = React.useState(null)

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
      console.log({ ...cartCake, client, phone })
      navigate('/thankYou')
      dispatch(removeCart())
    }

    //логика для отправки на сервер
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <p className={s.name}>Итого: {cartCake.totalPrice} ₽</p>
      <div className={s.buttons}>
        <NameInputField setClient={setClient} nameError={nameError} />
        <PhoneInputField
          phone={phone}
          setPhone={setPhone}
          phoneError={phoneError}
        />
        <ButtonForm onClick={checkForm} />
      </div>
    </form>
  )
}

export default OrderForm
