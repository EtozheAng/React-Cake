import { useDispatch } from 'react-redux'
import { addItem } from '../../../pages/Cart/store/slice'

export function useCartItem(cake, weight, selectedValue) {
  const dispatch = useDispatch()

  const onClickAdd = () => {
    const { id, name, imageUrl } = cake
    const item = {
      id,
      name,
      weight,
      filling: selectedValue,
      price: cake.price * weight,
      imageUrl,
    }
    dispatch(addItem(item))
  }

  return onClickAdd
}
