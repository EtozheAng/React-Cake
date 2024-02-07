import axios from 'axios'

export const fetchCake = async (name) => {
  try {
    const { data } = await axios.get(
      'https://64843ff7ee799e3216266cf1.mockapi.io/cake?search=' + name
    )
    return data
  } catch (error) {
    throw new Error('Ошибка при получении тортиков!')
  }
}
