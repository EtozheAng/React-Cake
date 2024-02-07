import { Container } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import s from './Cart.module.scss'
import CartItem from './CartItem'
import OrderForm from './OrderForm'
import CatalogBreadCrumbs from '../../../components/CatalogBreadCrumbs/CatalogBreadCrumbs'
import NavigationBar from '../../../components/Navigation/NavigationBar'
import { useSelector } from 'react-redux'
import CartEmpty from './CartEmpty'

const Cart = () => {
  const { totalPrice, items } = useSelector((state) => state.cart)
  if (!totalPrice) {
    return <CartEmpty />
  }
  return (
    <>
      <Container>
        <div className={s.wrapper}>
          <CatalogBreadCrumbs name={'Корзина'} className={s.crumbs} />
          <h2 className={s.title}>Корзина ({items.length})</h2>
          <div className={s.items}>
            {items.map((cake) => (
              <CartItem key={uuidv4()} cake={cake} />
            ))}
            <OrderForm />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Cart
