import s from './Advantages.module.scss'
import gift from '../../assets/images/CompanyAdvantages/gift.png'
const Advantages = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <h2 className={`title ${s.title}`}>Кондитерская «Детство» - это...</h2>
        <div className={s.content}>
          <img className={s.image} src={gift} alt="Коробка конфет" />
          <div className={s.items}>
            <div className={s.item}>
              <h4 className={s.subtitle}>
                Превосходные торты для Вас и ваших детей
              </h4>
              <p className={s.text}>
                Превосходные торты для Вас и ваших детей. К нам приходят с
                уверенностью, что тортик будет вкусным и качественным
              </p>
              <h4 className={s.subtitle}>Собственное производство</h4>
              <p className={s.text}>
                Собственное производство позволяет экспериментировать и
                ежедневно улучшать наш любимый продукт – торты
              </p>
              <h4 className={s.subtitle}>36 пеших и автокурьеров</h4>
              <p className={s.text}>
                А чтобы вы получили ваше лакомство целым и к назначенному
                времени, у нас работает 36 пеших и автокурьеров.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Advantages
