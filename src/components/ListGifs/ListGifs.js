import React, { useState, useEffect } from 'react'
import getGifs from '../../services/getGifs'
import Gif from '../Gif/Gif'
import './ListGifs.css'

export default function ListGifs({ params }) {
  const { keyword } = params
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword }).then(image => setGifs(image))
  }, [keyword])

  return <div>
    {
      gifs.map(gif =>
        <Gif
          key={gif.id}
          title={gif.title}
          url={gif.url}
          id={gif.id}
        />
      )
    }
    </div>
}

