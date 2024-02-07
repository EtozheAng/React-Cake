import { Container } from '@mui/material'
import DirectoryControlPanel from '../../../modules/DirectoryControlPanel/components/DirectoryControlPanel'
import ProductDescription from '../../../modules/ProductDescription/components/ProductDescription'
import s from './ProductCardFull.module.scss'
import CatalogNav from '../../../modules/CatalogNav/components/CatalogNav'

const ProductCardFull = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <h2 className={s.title}>Каталог</h2>
        <div className={s.box}>
          <CatalogNav />
          <div className={s.content}>
            <DirectoryControlPanel />
            <ProductDescription />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductCardFull
