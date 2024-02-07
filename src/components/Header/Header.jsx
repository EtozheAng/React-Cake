import logo from '../../assets/images/Header-Logo.png'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ButtonTg from '../../ui/ButtonTg'
import Popup from '../Popup/Popup'
import ButtonSvg from '../../ui/ButtonSvg'

const Header = () => {
  const cakes = useSelector((state) => state.cart.items)
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <Link className={s.logo} to="/">
            <img src={logo} alt="Торты для детей" />
          </Link>

          <ul className={s.info}>
            <li className={s.info__item}>МО, Люберцы, Весенняя, 16</li>
            <li className={s.info__item}>с 8:00 до 22:00</li>
            <li className={s.info__item}>
              <Link className={s.info__item_tel} to="tel:+79165760433">
                +7 (916) 576-04-33
              </Link>
            </li>
          </ul>
          <div className={s.buttons}>
            <ButtonTg />
            <Popup name="Заказать звонок" />
            <div className={s.cart}>
              <Link to="/cart">
                {cakes.length ? (
                  <>
                    <ButtonSvg svgId="cartFull" />
                    <span className={s.count}>{cakes.length}</span>
                  </>
                ) : (
                  <ButtonSvg svgId="cart" />
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
