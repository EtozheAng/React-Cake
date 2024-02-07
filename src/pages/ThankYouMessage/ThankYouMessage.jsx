import React from 'react'
import ButtonTg from '../../ui/ButtonTg'
import { Container } from '@mui/material'
import Balloons from '../../assets/images/Balloons.png'
import s from './ThankYouMessage.module.scss'
import ButtonHome from '../../ui/ButtonHome/ButtonHome'

const ThankYouMessage = () => {
  return (
    <Container>
      <div className={s.wrapper}>
        <h2 className={s.title}>
          Спасибо, что доверились нам! Мы с вами свяжемся в течение 1 часа
        </h2>
        <div className={s.content}>
          <p className={s.topic}>
            Узнайте о нас чуть больше, перейдя в Instagram
          </p>
          <p className={s.text}>
            Там все самое интересное и актуальное, а еще мы регулярно проводим
            розыгрыши, будем рады Вас видеть{' '}
          </p>
          <div className={s.buttons}>
            <ButtonTg />
            <ButtonHome color="#e9657e" />
          </div>
        </div>
        <img className={s.image} src={Balloons} alt="Balloons" />
      </div>
    </Container>
  )
}

export default ThankYouMessage
