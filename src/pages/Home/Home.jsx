import Advantages from '../../components/Advantages/Advantages'
import CompanyAdvantages from '../../components/CompanyAdvantages/CompanyAdvantages'
import IndividualSelection from '../../components/IndividualSelection/IndividualSelection'
import Product from './components/Product/Product'

const Home = () => {
  return (
    <>
      <Product />
      <CompanyAdvantages />
      <Advantages />
      <IndividualSelection />
    </>
  )
}

export default Home
