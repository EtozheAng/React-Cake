import s from './CompanyAdvantages.module.scss'
import girlAndCat from '../../assets/images/CompanyAdvantages/girl-and-cat.png'
import girlAnRabbit from '../../assets/images/CompanyAdvantages/girl-and-rabbit.png'
import decoration from '../../assets/images/popupDecoration.png'
const CompanyAdvantages = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <h2 className={`title ${s.title}`}>
          Почему настроение вашего ребёнка можно доверить нам
        </h2>
        <div className={s.content}>
          <div className={s.items}>
            <img
              className={s.image}
              src={girlAnRabbit}
              alt="Девочка с кроликом"
            />
            <div className={s.item}>
              <h4 className={s.subtitle}>
                Специализируемся на детских тортиках{' '}
              </h4>
              <p className={s.text}>
                Специализируемся на детских тортиках. Мы знаем свое дело и не
                хотим распыляться. Ежедневно оттачиваем свое мастерство для
                наших главных ценителей – детей и их родителей
              </p>
              <h4 className={s.subtitle}>Всегда во время</h4>
              <p className={s.text}>
                Всегда вовремя. Не беспокойтесь – вы получите свой торт на заказ
                точно к оговоренной дате. Заранее сообщим, сколько займет
                производство торта под заказ
              </p>
              <h4 className={s.subtitle}>Качество на высоте</h4>
              <p className={s.text}>
                Качество на высоте. Используем только проверенные и
                сертифицированные продукты от российских производителей
              </p>
            </div>
          </div>
          <div className={s.items}>
            <div className={s.item}>
              <img className={s.decoration} src={decoration} alt="Загогулина" />
              <h4 className={s.subtitle}>Фиксированная цена</h4>
              <p className={s.text}>
                Фиксированная цена. Может быть только дешевле в зависимости от
                оформления, дороже – никогда! Мы работаем без скрытых доплат,
                точную стоимость вы узнаете сразу у менеджера.
              </p>
              <h4 className={s.subtitle}>Собственное производство</h4>
              <p className={s.text}>
                Собственное производство. Это позволяет нам никак не зависеть от
                подрядчиков, давать Вам самое высокое качество продуктов и
                поддерживать доступные цены.
              </p>
              <h4 className={s.subtitle}>Подарки в каждый заказ</h4>
              <p className={s.text}>
                Подарки в каждый заказ. Мы очень ценим своих клиентов и хотим
                показать свою благодарность за доверие к нам.
              </p>
            </div>
            <img className={s.image} src={girlAndCat} alt="Девочка с котом" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CompanyAdvantages
