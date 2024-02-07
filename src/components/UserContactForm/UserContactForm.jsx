import React from 'react'
import s from './UserContactForm.module.scss'
import NameInputField from '../../ui/NameInputField'
import PhoneInputField from '../PhoneInputField/PhoneInputField'
import ButtonForm from '../../ui/ButtonForm'

const UserContactForm = React.memo(() => {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ name, phone })
    // handleInputChange()

    // !nameError && !phoneError && console.log('Данные формы:', { buyer, phone })
    // console.log(nameError)
    // console.log(phoneError)
  }
  return (
    <form className={s.popup} onSubmit={handleSubmit}>
      <h2 className={s.title}>Заполните форму</h2>
      <div className={s.buttons}>
        <NameInputField name={name} setName={setName} />
        <PhoneInputField phone={phone} setPhone={setPhone} />
      </div>
      <ButtonForm />
    </form>
  )
})
export default UserContactForm
