export const isValidPhoneNumber = (phone) => {
  phone && isPossiblePhoneNumber(phone)
    ? setPhoneError(false)
    : setPhoneError(true)
}
