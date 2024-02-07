import { Breadcrumbs, Typography } from '@mui/material'
import { useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useCakeDetails } from '../../modules/ProductDescription/hooks/useCakeDetails'
import s from './CatalogBreadCrumbs.module.scss'
import { useSelector } from 'react-redux'
import { selectCategory } from '../../modules/CatalogNav/store/selector'

const CatalogBreadCrumbs = ({ name }) => {
  const params = useParams()
  const { categoryName } = useSelector(selectCategory)
  const cake = useCakeDetails() // запрос выбранного торта
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link className={s.link} to="/" underline="hover" color="inherit">
        {name ? 'Главная' : 'Каталог'}
      </Link>
      {cake?.name ? (
        <Link
          to={`/catalog/${params.category}`}
          className={s.link}
          underline="hover"
          color="inherit"
        >
          {categoryName}
        </Link>
      ) : (
        <p className={s.home}>{categoryName}</p>
      )}

      {params?.name && <p className={s.home}>{cake?.name}</p>}
    </Breadcrumbs>
  )
}

export default CatalogBreadCrumbs
