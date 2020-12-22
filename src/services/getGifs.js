const apiKey = 'zKN92lIwmGaxOrb2gM0SFkMVK0Xuwu58'
export default function getGifs({ keyword = 'gatos' } = {}) {

  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}`

  return fetch(apiUrl).then(res => res.json())
    .then(response => {
      const { data = [] } = response
      const gifs = data.map(image => {
        const { images, title, id } = image
        const { url } = images.downsized_medium
        return { title, url, id }
      })
      return gifs
    })
}
