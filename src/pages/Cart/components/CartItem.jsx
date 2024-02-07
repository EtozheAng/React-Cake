import ButtonSvg from '../../../ui/ButtonSvg'
import s from './Cart.module.scss'
import ToppingSelect from '../../../ui/ToppingSelect'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, changeStuffing, minusItem } from '../store/slice'
import { useEffect, useState } from 'react'

const CartItem = ({ cake }) => {
  const dispatch = useDispatch()
  const { name, weight, filling, price, imageUrl, count } = cake
  const [selectedValue, setSelectedValue] = useState(filling)

  const handleChange = (event, value) => {
    setSelectedValue(value)
  }
  useEffect(() => {
    selectedValue &&
      selectedValue?.label !== filling?.label &&
      dispatch(changeStuffing({ cake, selectedValue }))
  }, [selectedValue])

  return (
    <div className={s.item}>
      <div className={s.description}>
        <p className={s.name}>{name}</p>
        <p className={s.text}>
          Размер: <span>{weight}</span>кг
        </p>
        <div className={s.select}>
          <p className={s.text}>Начинка</p>
          <ToppingSelect onChange={handleChange} value={filling} />
        </div>
      </div>
      <img className={s.img} src={imageUrl} alt="cake" />
      <div className={s.counter}>
        <ButtonSvg
          svgId="minusButton"
          onClick={function () {
            dispatch(minusItem(cake))
          }}
        />
        <span>{count}</span>
        <ButtonSvg
          svgId="plusButton"
          onClick={function () {
            dispatch(addItem(cake))
          }}
        />
      </div>
      <p className={s.price}>{price * count} ₽</p>
    </div>
  )
}

export default CartItem
