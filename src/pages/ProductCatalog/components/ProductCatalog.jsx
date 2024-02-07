import { Container } from '@mui/material'
import Catalog from '../../../modules/Catalog/components/Catalog/Catalog'
import DirectoryControlPanel from '../../../modules/DirectoryControlPanel/components/DirectoryControlPanel'
import s from './ProductCatalog.module.scss'
import CatalogNav from '../../../modules/CatalogNav/components/CatalogNav'

const ProductCatalog = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <h2 className={s.title}>Каталог</h2>
        <div className={s.box}>
          <CatalogNav />
          <div className={s.content}>
            <DirectoryControlPanel />
            <Catalog />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductCatalog
