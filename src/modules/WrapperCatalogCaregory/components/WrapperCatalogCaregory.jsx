import CardCategory from '../../../components/CardCategory/CardCategory copy'
import s from './WrapperCatalogCaregory.module.scss'
import { categories } from '../../../consts/categories'
import { v4 as uuidv4 } from 'uuid'

const WrapperCatalogCaregory = () => {
  const categorys = categories.filter((item) => item.rating < 6)
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Популярные категории</h3>
      <div className={s.items}>
        {categorys.map((category) => (
          <CardCategory key={uuidv4()} category={category} />
        ))}
      </div>
    </div>
  )
}

export default WrapperCatalogCaregory
