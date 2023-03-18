import { useEffect, useState } from 'react'
import { getRandomCat } from '../services/cats'

export function useCatImage ({ fact }) {
  const [image, setImage] = useState()

  // efecto que trae la imagen con las primeras palabras
  useEffect(() => {
    if (!fact) return

    const words = fact.split(' ', 3).join(' ')

    getRandomCat(words).then(newImage => setImage(newImage))
  }, [fact])

  return image
}
