import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import { useState } from 'react'
import s from './ProductDescription.module.scss'

const TabsProduct = ({ descritpion }) => {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box
          sx={{
            marginBottom: '20px',
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            indicatorColor="none"
          >
            <Tab
              sx={{
                '&.Mui-selected': {
                  opacity: 1,
                  color: 'inherit',
                },
                textTransform: 'none',
                color: '#464646',
                fontSize: '18px',
                fontWeight: '400',
                borderRadius: '2000px',
                background: '#FFF',
                border: 'none',
                opacity: 0.5,
                marginRight: '10px',
              }}
              label="Описание"
              value="1"
            />
            <Tab
              sx={{
                '&.Mui-selected': {
                  opacity: 1,
                  color: 'inherit',
                },
                textTransform: 'none',
                color: '#464646',
                fontSize: '18px',
                fontWeight: '400',
                borderRadius: '2000px',
                background: '#FFF',
                border: 'none',
                opacity: 0.5,
                marginRight: '10px',
              }}
              label="Доставка и самовывоз"
              value="2"
            />
            <Tab
              sx={{
                '&.Mui-selected': {
                  opacity: 1,
                  color: 'inherit',
                },
                textTransform: 'none',
                color: '#464646',
                fontSize: '18px',
                fontWeight: '400',
                borderRadius: '2000px',
                background: '#FFF',
                border: 'none',
                opacity: 0.5,
              }}
              label="Оплата"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel
          sx={{
            borderRadius: '15px',
            background: '#FFF',
            fontFamily: 'Raleway',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: '130%',
          }}
          value="1"
        >
          {descritpion?.description ?? 'Выбирите начинку'}
        </TabPanel>
        <TabPanel
          sx={{
            borderRadius: '15px',
            background: '#FFF',
            fontFamily: 'Raleway',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: '130%',
          }}
          value="2"
        >
          <ul className={s.list}>
            <li>
              <span>Доставим в целости и сохранности </span>(интервалы 3 часа)
            </li>
            <li>
              <span>Самовывоз: бесплатно </span>(МО, Люберцы, Весеняя, 16)
            </li>
            <li>
              <span>Курьер внутри МКАД:</span> 600 руб
            </li>
            <li>
              <span>Курьер по области:</span> 600 руб + 40 руб/км
            </li>
            <li>
              <span>Доставка к точному времени:</span> 1000 руб
            </li>
          </ul>
        </TabPanel>
        <TabPanel
          sx={{
            borderRadius: '15px',
            background: '#FFF',
            fontFamily: 'Raleway',
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: '130%',
          }}
          value="3"
        >
          <p className={s.tabs_title}>
            Вы можете выбрать удобный для Вас способ оплаты:{' '}
          </p>
          <ul className={s.tabs_list}>
            <li>
              ⦁ наличными по факту получения торта в кондитреской, либо при
              доставке курьеру
            </li>
            <li>
              ⦁ перечислив деньги на банковскую карту Сбербанка (номер карты Вам
              сообщит менеджер)
            </li>
          </ul>
          <p>
            Мы работаем только по предоплате в размере 30% от стоимости торта.
            На карту или наличными в кондитерской. *Предоплата не возвращается,
            если Вы отказываетесь от заказа менее, чем за 1 день до даты
            доставки торта.
          </p>
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default TabsProduct
