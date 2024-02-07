import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import s from './CatalogNav.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId, setCategoryName } from '../store/slice'
import { categories } from '../../../consts/categories'
import { useEffect } from 'react'
import { slugify, transliterate } from 'transliteration'

const CatalogNav = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const navigare = useNavigate()

  useEffect(() => {
    if (params.category) {
      const categoryId = categories.filter(
        (item) => slugify(item.name) === params.category
      )
      categoryId[0]?.id ?? navigare('/')
      console.log(categoryId[0]?.name)
      dispatch(
        setCategoryId({
          categoryId: categoryId[0]?.id,
          categoryName: categoryId[0]?.name,
        })
      )
    }
  }, [])

  const onClickCategoty = (category, id) => {
    dispatch(setCategoryId({ categoryId: id, categoryName: category }))
  }
  return (
    <nav className={s.wrapper}>
      <ul className={s.list}>
        {categories.map((category, index) => (
          <li
            onClick={() => onClickCategoty(category.name, category.id)}
            className={
              params.category === slugify(category.name) ? s.active : s.item
            }
            key={uuidv4()}
            data-index={index}
          >
            <Link to={`/catalog/${slugify(category.name)}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CatalogNav
