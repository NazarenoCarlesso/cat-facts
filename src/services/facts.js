export const getRandomFact = async () => {
  return await fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => data.fact)
}
