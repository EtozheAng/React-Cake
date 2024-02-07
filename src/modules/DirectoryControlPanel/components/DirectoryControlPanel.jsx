import CatalogBreadCrumbs from '../../../components/CatalogBreadCrumbs/CatalogBreadCrumbs'
import NumberGoods from './NumberGoods'
import s from './DirectoryControlPanel.module.scss'
import { useSelector } from 'react-redux'
import { selectCakeData } from '../../Catalog/store/selectors'
import SelectUi from './SelectUi'

const DirectoryControlPanel = () => {
  const { items } = useSelector(selectCakeData) // ??
  // console.log(items.length)
  return (
    <div className={s.wrapper}>
      <CatalogBreadCrumbs />
      <div className={s.inner}>
        <NumberGoods totalCakes={items.length} />
        <SelectUi />
      </div>
    </div>
  )
}

export default DirectoryControlPanel
