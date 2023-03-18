import React, { useEffect, useState } from 'react'

export default function App () {
  const [fact, setFact] = useState()
  const [words, setWords] = useState()
  const [image, setImage] = useState()

  // efecto que trae el hecho y sus primeras palabras
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        const firstWords = fact.split(' ', 3).join(' ')
        // console.log(firstWords)
        setFact(fact)
        setWords(firstWords)
      })
  }, [])

  // efecto que trae la imagen con las primeras palabras
  useEffect(() => {
    if (!fact) return

    fetch(`https://cataas.com/cat/says/${words}?size=50&json=true`)
      .then(response => response.json())
      .then(data => {
        const { url } = data
        setImage(url)
      })
  }, [words])

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={`https://cataas.com/${image}`} alt={`Image extracted using the three first words for ${fact}`} />}
    </main>
  )
}
