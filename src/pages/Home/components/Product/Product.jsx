import { Container } from '@mui/material'
import s from './Product.module.scss'

import WrapperCatalogCaregory from '../../../../modules/WrapperCatalogCaregory/components/WrapperCatalogCaregory'
import CatalogNav from '../../../../modules/CatalogNav/components/CatalogNav'

const Product = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <h2 className={s.title}>Каталог</h2>
        <div className={s.box}>
          <CatalogNav />
          <div className={s.content}>
            <WrapperCatalogCaregory />
            <WrapperCatalogCaregory />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
