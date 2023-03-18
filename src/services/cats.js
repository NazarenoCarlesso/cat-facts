export const getRandomCat = async (words) => {
  return await fetch(`https://cataas.com/cat/says/${words}?size=50&json=true`)
    .then(response => response.json())
    .then(data => data.url)
}
