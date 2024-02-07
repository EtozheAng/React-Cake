import React from 'react'
import PhoneNumberField from '../../ui/PhoneNumberField'
import InputNumber from 'react-phone-number-input/input'

const PhoneInputField = ({ phone, setPhone, phoneError }) => {
  return (
    <InputNumber
      country="RU"
      international
      withCountryCallingCode
      value={phone}
      error={phoneError}
      onChange={setPhone}
      inputComponent={PhoneNumberField}
    />
  )
}

export default PhoneInputField
