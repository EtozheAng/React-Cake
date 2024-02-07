import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchCake } from '../api/fetchCake'
// import translitRusEng from 'translit-rus-eng'

export function useCakeDetails() {
  const [cake, setCake] = useState(null)
  const navigate = useNavigate()
  const { name } = useParams()
  // console.log(translitRusEng(name, { engToRus: true }))

  useEffect(() => {
    async function fetchCakeDetails() {
      try {
        const [data] = await fetchCake(name)
        setCake(data)
      } catch (error) {
        alert(error.message)
        navigate('/')
      }
    }
    fetchCakeDetails()
  }, [])

  return cake
}
