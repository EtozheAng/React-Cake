import { Container } from '@mui/material'
import cartEmptyImg from '../../../assets/images/cart/empty-cart.png'
import s from './Cart.module.scss'
const CartEmpty = () => {
  return (
    <Container>
      <div className={s.cartEmpty}>
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <img src={cartEmptyImg} alt="Empty cart" />
      </div>
    </Container>
  )
}

export default CartEmpty
