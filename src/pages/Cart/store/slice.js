import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 803,
  items: [
    {
      id: 1,
      name: 'Торт Путешествие',
      weight: 1,
      price: 803,
      filling: {
        label: 'Фирменный торт',
        description:
          'Ванильный бисквит, сливочно-сырный крем, прослойка из натуральной варёной сгущёнки, прослойка из безе, прослойка из 100% фундучной пасты (можно сделать с добавлением грецкого ореха)',
      },
      imageUrl:
        'https://cdn.tortoff.net/upload/iblock/9c7/bezimeni_78_imp7164409imp_.jpg?1683446851181797',
      count: 1,
    },
  ],
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.filling.label === action.payload.filling.label &&
          obj.weight === action.payload.weight
      )
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.items.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      )
    },
    minusItem(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.filling.label === action.payload.filling.label &&
          obj.weight === action.payload.weight
      )
      if (findItem) {
        findItem.count--
        state.totalPrice = state.items.reduce(
          (sum, obj) => obj.price * obj.count + sum,
          0
        )
        state.items = state.items.filter((obj) => obj.count !== 0)
      }
    },
    changeStuffing(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.cake.id &&
          obj.filling.label === action.payload.cake.filling.label &&
          obj.weight === action.payload.cake.weight
      )
      if (findItem.filling !== action.payload.selectedValue) {
        findItem.filling = action.payload.selectedValue
      }
    },
    removeCart(state) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const { addItem, minusItem, changeStuffing, removeCart } =
  cartSlice.actions
export default cartSlice.reducer
