import { Container } from '@mui/material'
import s from './NotFound.module.scss'
import ButtonTg from '../../../ui/ButtonTg'
import NotFoundMan from '../../../assets/images/NotFoundMan.png'
import error404 from '../../../assets/images/404.svg'
import { Link } from 'react-router-dom'
import ButtonHome from '../../../ui/ButtonHome/ButtonHome'
const NotFound = () => {
  return (
    <Container>
      <div className={s.wrapper}>
        <img className={s.error} src={error404} alt="notFound" />
        <div className={s.box}>
          <p className={s.text}>Такой страницы не существует</p>
          <div className={s.buttons}>
            <Link className={s.button} to="/">
              <p>Перейти в каталог</p>
            </Link>
            <ButtonHome color="#FFF" />
          </div>
          <img className={s.images} src={NotFoundMan} alt="notFound" />
        </div>
      </div>
    </Container>
  )
}

export default NotFound
