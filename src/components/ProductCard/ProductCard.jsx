import ButtonTg from '../../ui/ButtonTg'
import s from './ProductCard.module.scss'
import { Link, useLocation } from 'react-router-dom'
import Popup from '../Popup/Popup'
import { slugify } from 'transliteration'

const ProductCard = ({ item }) => {
  const { id, name, imageUrl, price } = item
  const location = useLocation()
  return (
    <article className={s.card}>
      <div className={s.imageBox}>
        <Link to={`${location.pathname}/${slugify(name)}`}>
          <img className={s.img} src={imageUrl} alt={name} />
        </Link>
      </div>
      <hr className={s.divider} />
      <div className={s.box}>
        <h3 className={s.text}>{name}</h3>
        <p className={s.price}>{price} ₽/кг</p>
      </div>
      <div className={s.buttons}>
        <Popup item={item} />
        <ButtonTg />
      </div>
    </article>
  )
}

export default ProductCard
