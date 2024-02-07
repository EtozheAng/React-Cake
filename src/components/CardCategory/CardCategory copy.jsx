import { Link } from 'react-router-dom'
import s from './CardCategory.module.scss'
import { slugify } from 'transliteration'

const CardCategory = ({ category }) => {
  return (
    <div className={s.item}>
      <Link to={`/catalog/${slugify(category.name)}`}>
        <img className={s.img} src={category.image} alt="cake" />
        <p className={s.text}>{category.name}</p>
      </Link>
    </div>
  )
}

export default CardCategory
