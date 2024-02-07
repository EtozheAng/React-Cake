import { v4 as uuidv4 } from 'uuid'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import s from './Catalog.module.scss'
import ProductCard from '../../../../components/ProductCard/ProductCard'
import { fetchCakes } from '../../api/asyncAction'
import { selectCakeData } from '../../store/selectors'
import { selectCategory } from '../../../CatalogNav/store/selector'
import { selectFilterValue } from '../../../DirectoryControlPanel/store/selector'
import CustomPagination from '../CustomPagination/CustomPagination'
import CatalogSkeleton from '../CatalogSkeleton/CatalogSkeleton'

const Catalog = () => {
  const dispatch = useDispatch()
  const { items, status } = useSelector(selectCakeData)
  const { categoryId } = useSelector(selectCategory)
  const filterSelect = useSelector(selectFilterValue)
  const currentPage = useSelector((state) => state.cake.currentPage)

  const getCakes = async () => {
    const sortBy = filterSelect.replace('-', '')
    const order = filterSelect.includes('-') ? 'asc' : 'desc'

    dispatch(fetchCakes({ categoryId, sortBy, order, currentPage }))
  }

  // Если был первый рендер, то запрашиваем тортики
  useEffect(() => {
    if (categoryId) {
      getCakes()
    }
  }, [dispatch, categoryId, filterSelect, currentPage])

  const cakes = items.map((item) => <ProductCard key={uuidv4()} item={item} />)
  return (
    <div className={s.wrapper}>
      <div className={s.items}>
        {status === 'error' ? (
          <div className={s.error}>
            <h2>Произошла ошибка</h2>
            <p>К сожалению, не удалось получить тортики :(</p>
          </div>
        ) : status === 'loading' ? (
          [...new Array(6)].map((_, index) => <CatalogSkeleton key={index} />)
        ) : (
          cakes
        )}
      </div>
      <CustomPagination />
    </div>
  )
}

export default Catalog
