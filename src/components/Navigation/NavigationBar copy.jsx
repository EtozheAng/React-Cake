import * as React from 'react'
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import { AppBar, Container, Toolbar } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import s from './Navigation.module.scss'
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector'
import { useDispatch } from 'react-redux'
import { setCategory } from '../../modules/CatalogNav/store/slice'
import { navigation } from './Theme'

const categorys = [
  'Для мальчика',
  'Для девочки',
  'По возрасту',
  'С животными',
  'Ягодные торты',
  'Единороги',
  'Фототорты',
  'Муссовые торты',
  'Торт «Тик ток»',
  'На день рождения',
  'Торты с куклами',
  'Торты с машинками',
  'Торты в пиратской тематике',
  'Без мастики',
  'Спорт и увлечения',
  'Торты с аниме',
  'Торты на определение пола',
  'На выписку',
  'В детский сад',
  'Торты по своему эскизу',
]

const NavigationBar = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  const popupState2 = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu2',
  })
  const dispatch = useDispatch()

  const onClickCategoty = (i) => {
    dispatch(setCategory(i))
  }
  return (
    <div className={s.wrapper}>
      <Container>
        <ul className={s.box}>
          {/* <li {...bindTrigger(popupState)}>
            Каталог <GlobalSvgSelector id="arrowDown" />
          </li>
          <li>Начинки</li>
          <li>Как сделать заказ</li>
          <li>Доставка</li>
          <li {...bindTrigger(popupState2)}>
            О компании <GlobalSvgSelector id="arrowDown" />
          </li>
          <li>FAQ</li>
          <li>Акции</li>
          <li>Контакты</li> */}
          {navigation.map((item, index) =>
            item?.submenu ? (
              <li {...bindTrigger(popupState)} className={index}>
                {item.label}
              </li>
            ) : (
              <li>{item.label}</li>
            )
          )}
        </ul>
        <Menu
          {...bindMenu(popupState)}
          sx={{
            '.MuiPaper-root': {
              borderRadius: '15px',
              boxShadow: '0px 4px 26px 0px rgba(232, 92, 107, 0.40)',
            },
            '.MuiList-root': {
              p: '15px',
              columnCount: 4,
              columnGap: '30px',
              columnWidth: '90px',
              background: '#FEF2F3',
            },
          }}
          autoFocus={false}
          onClick={popupState.close}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          {navigation.map((categoryName, index) => {
            return (
              <MenuItem
                sx={{
                  p: 0,
                  mb: '15px',
                  fontFamily: 'Raleway',
                  fontSize: '15px',
                  '&:last-child': {
                    mb: 0,
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    opacity: '.5',
                  },
                }}
                key={uuidv4()}
                onClick={() => onClickCategoty(index)}
              >
                <Link to={`/catalog/${categoryName.submenu}`}>
                  {categoryName.submenu}
                </Link>
              </MenuItem>
            )
          })}
        </Menu>
        <Menu
          {...bindMenu(popupState2)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <MenuItem onClick={popupState2.close}>Наша компани</MenuItem>
          <MenuItem onClick={popupState2.close}>Вакансии</MenuItem>
        </Menu>
      </Container>
    </div>
  )
}

export default NavigationBar
