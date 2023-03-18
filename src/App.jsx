import React from 'react'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export default function App () {
  // CatFact custom hook
  const { fact, refreshFact } = useCatFact()
  // CatImage custom hook
  const imageUrl = useCatImage({ fact })
  // click handler
  const handleClick = () => refreshFact()
  // render component
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Refresh</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`https://cataas.com/${imageUrl}`} alt={`Image extracted using the three first words for ${fact}`} />}
    </main>
  )
}
