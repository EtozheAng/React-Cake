import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/components/Cart'
import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
// import NavigationBar from './components/Navigation/NavigationBar'
import ProductCardFull from './pages/ProductCardFull/components/ProductCardFull'
import ProductCatalog from './pages/ProductCatalog/components/ProductCatalog'
import { Provider } from 'react-redux'
import { store } from './store/store'
import NavigationBar from './components/Navigation/NavigationBar'
import NotFound from './pages/NotFound/componenst/NotFound'
import ThankYouMessage from './pages/ThankYouMessage/ThankYouMessage'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog/:category" element={<ProductCatalog />} />
            <Route
              path="/catalog/:category/:name"
              element={<ProductCardFull />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thankYou" element={<ThankYouMessage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
