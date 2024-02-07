import s from './IndividualSelection.module.scss'
import giftBoxes from '../../assets/images/CompanyAdvantages/gift-boxes.png'
import ButtonTg from '../../ui/ButtonTg'
const IndividualSelection = () => {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <h2 className={`title ${s.title}`}>Кондитерская «Детство» - это...</h2>
        <div className={s.content}>
          <div className={s.items}>
            <h4 className={s.subtitle}>
              Расскажите о том, что вы хотите видеть
            </h4>
            <p className={s.text}>
              Расскажите о том, что вы хотите видеть или под какое мероприятие
              подбираете тортик, а мы вышлем подборку подходях тортиков и
              осуществим задуманное.
            </p>
            <ButtonTg className={s.button} />
          </div>
          <img className={s.image} src={giftBoxes} alt="Коробки с подарками" />
        </div>
      </div>
    </div>
  )
}
export default IndividualSelection
