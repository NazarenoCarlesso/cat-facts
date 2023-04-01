import React from 'react'
import { useCatFact } from '../hooks/useCatFact'
import { useCatImage } from '../hooks/useCatImage'

export default function Cat () {
  // CatFact custom hook
  const { fact } = useCatFact()
  // CatImage custom hook
  const imageUrl = useCatImage({ fact })
  return (
    <div>
      {fact && <p>{fact}</p>}
      {
        imageUrl
          ? <img src={`https://cataas.com/${imageUrl}`} alt={`Image extracted using the three first words for ${fact}`} />
          : <div style={{ height: 600 }} />
      }
    </div>
  )
}
