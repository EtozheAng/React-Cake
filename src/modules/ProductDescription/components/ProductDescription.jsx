import { Container, Tooltip } from '@mui/material'
import s from './ProductDescription.module.scss'
import ButtonUi from '../../../ui/ButtonUi'
import ButtonTg from '../../../ui/ButtonTg'
import { useEffect, useState } from 'react'
import TabsProduct from './TabsProduct'
import ToppingSelect from '../../../ui/ToppingSelect'
import ButtonSvg from '../../../ui/ButtonSvg'
import { useCakeDetails } from '../hooks/useCakeDetails'
import { useCartItem } from '../hooks/useCartItem'
import Popup from '../../../components/Popup/Popup'

const ProductDescription = () => {
  const [weight, setWeight] = useState(1)
  const [error, setError] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)

  const cake = useCakeDetails()
  const onClickAdd = useCartItem(cake, weight, selectedValue)

  const stuffingCheck = () => (!selectedValue ? setError(true) : onClickAdd())

  const handleChange = (event, value) => {
    setSelectedValue(value)
    setError(false)
  }
  const increment = () => {
    setWeight(weight + 1)
  }
  const decrement = () => {
    setWeight(weight - 1)
  }
  if (!cake) {
    return <>Загрузка...</>
  }

  const price = cake.price * weight
  return (
    <div className={s.wrapper}>
      <div className={s.product}>
        <img className={s.image} src={cake.imageUrl} alt="cake" />
        <div className={s.item}>
          <p>Артикул: {cake.id}</p>
          <h2 className={s.title}>{cake.name}</h2>
          <div className={s.component}>
            <p className={s.text}>
              Цена за <span className={s.span}>{weight}</span> кг.
            </p>
            <div className={s.buttonWrapper}>
              <ButtonSvg
                svgId="minusButton"
                onClick={decrement}
                disabled={weight <= 1}
              />
              <ButtonSvg
                svgId="plusButton"
                onClick={increment}
                disabled={weight >= 99}
              />
            </div>
            <span className={s.span}>{price} ₽</span>
            <ButtonSvg
              svgId="miniCart"
              onClick={stuffingCheck}
              className={s.cart}
            />
          </div>
          <div className={s.component}>
            <p className={s.text}>Выбрать начинку:</p>
            <ToppingSelect onChange={handleChange} error={error} />
            <Tooltip title="Если вы пока не знаете, какую хотите начинку – оставьте в этом поле любую начинку, менеджер уточнит детали при заказе">
              <span className={s.tooltip}>?</span>
            </Tooltip>
          </div>
          <div className={s.buttons}>
            <Popup item={cake} />
            <ButtonTg />
          </div>
        </div>
      </div>
      <hr className={s.divider} />
      <TabsProduct descritpion={selectedValue} />
    </div>
  )
}

export default ProductDescription
