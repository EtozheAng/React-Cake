import s from './DirectoryControlPanel.module.scss'

const NumberGoods = ({ totalCakes }) => {
  return (
    <p className={s.text}>
      Торты:<span className={s.span}> 1-{totalCakes}</span>
      {/* <span className={s.span}> {totalCakes}</span> */}
    </p>
  )
}

export default NumberGoods
