import {
  AppBar,
  Toolbar,
  MenuItem,
  Box,
  Container,
  MenuList,
  Link,
} from '@mui/material'
import {
  bindHover,
  bindPopover,
  usePopupState,
} from 'material-ui-popup-state/hooks'
import { v4 as uuidv4 } from 'uuid'
import HoverPopover from 'material-ui-popup-state/HoverPopover'
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector'

const Navigation = () => {
  const MenuItems = [
    {
      name: 'Каталог',
      subtitle: [
        [
          'Для мальчика',
          'Для девочки',
          'По возрасту',
          'С животными',
          'Ягодные торты',
        ],
        [
          'Единороги',
          'Фототорты',
          'Муссовые торты',
          'Торт «Тик ток»',
          'На день рождения',
        ],
        [
          'Торты с куклами',
          'Торты с машинками',
          'Торты в пиратской тематике',
          'Без мастики',
          'Спорт и увлечения',
        ],
        [
          'Торты с аниме',
          'Торты на определение пола',
          'На выписку',
          'В детский сад',
          'Торты по своему эскизу',
        ],
      ],
      link: '/',
    },
    {
      name: 'Начинки',
      link: '#',
    },
    {
      name: 'Как сделать заказ',
      link: '#',
    },
    {
      name: 'Доставка',
      link: '#',
    },
    {
      name: 'О компании',
      subtitle: [['Наша компани', 'Вакансии']],
      link: '#',
    },
    {
      name: 'FAQ',
      link: '#',
    },
    {
      name: 'Акции',
      link: '#',
    },
    {
      name: 'Контакты',
      link: '#',
    },
  ]

  const catalogState = usePopupState({
    variant: 'popover',
    popupId: 'catalog',
  })
  const AboutState = usePopupState({
    variant: 'popover',
    popupId: 'about',
  })

  return (
    <AppBar
      position="static"
      sx={{
        background:
          'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 69.54%)',
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          disableGutters={true}
        >
          {MenuItems.map((item, index) =>
            item?.subtitle ? (
              <div key={index + 1 / 3232}>
                <MenuItem
                  variant="contained"
                  key={index / 3}
                  sx={{
                    p: 0,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                  {...bindHover(
                    item.name === 'Каталог' ? catalogState : AboutState
                  )}
                >
                  <Link
                    sx={{
                      fontSize: '18px',
                      fontFamily: 'Montserrat Alternates',
                      color: '#464646',
                      marginRight: '7px',
                      '&:hover': {
                        color: 'rgba(232, 92, 107, 0.40)',
                        fontWeight: 700,
                      },
                    }}
                    href={item.link}
                    underline="none"
                  >
                    {item.name}
                  </Link>
                  <GlobalSvgSelector id="arrowDown" />
                </MenuItem>
                <HoverPopover
                  key={uuidv4()}
                  {...bindPopover(
                    item.name === 'Каталог' ? catalogState : AboutState
                  )}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 0,
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 0,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '60px',
                      p: '30px',
                      borderRadius: '15px',
                      background: '#FEF2F3',
                      boxShadow: '0px 4px 26px 0px rgba(232, 92, 107, 0.40)',
                    }}
                    key={uuidv4()}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    {item.subtitle.map((category) => (
                      <MenuList sx={{ p: 0 }} key={uuidv4()}>
                        {category.map((item) => (
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
                            disableGutters={true}
                            key={uuidv4()}
                          >
                            {item}
                          </MenuItem>
                        ))}
                      </MenuList>
                    ))}
                  </Box>
                </HoverPopover>
              </div>
            ) : (
              <MenuItem
                sx={{
                  p: 0,
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
                key={uuidv4()}
                href={item.link}
              >
                <Link
                  key={uuidv4()}
                  sx={{
                    color: '#464646',
                    fontSize: '18px',
                    fontFamily: 'Montserrat Alternates',
                    '&:hover': {
                      color: 'rgba(232, 92, 107, 0.40)',
                      fontWeight: 700,
                    },
                  }}
                  href={item.link}
                  underline="none"
                >
                  {item.name}
                </Link>
              </MenuItem>
            )
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation
