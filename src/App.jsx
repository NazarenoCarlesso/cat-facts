import React, { useCallback, useRef, useState } from 'react'
import Cat from './components/Cat'

export default function App () {
  // cats array
  const [cats, setCats] = useState([1, 2, 3, 4, 5, 6])
  const addCat = () => { setCats([...cats, 1]) }
  // observer ref
  const observer = useRef(null)
  // observer function
  const lastCat = useCallback((node) => {
    if (!node) return
    if (observer.current) observer.current.disconnect()
    // eslint-disable-next-line no-undef
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { addCat() }
    }, { rootMargin: '600px' })
    observer.current.observe(node)
  }, [cats])
  // render component
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>App de gatitos</h1>
      <h1>NUESTRA PAGINA DE GATOS</h1>
      <h1>MUCHO TEXTOOO</h1>
      <h1>MUCHO TEXTOOO</h1>
      <h1>MUCHO TEXTOOO</h1>
      {cats.map((cat, index) => <Cat key={index} />)}
      <div ref={lastCat} id='visor' />
    </main>
  )
}
