import React, { useState } from 'react'
import { useLocation } from 'wouter'

export default function Searcher() {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ keyword })
  }

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      pushLocation(`/${keyword}`)
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={keyword}
              className="input-text"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Buscar"
              className="input-button"
            />
          </div>
        </form>
      </div>
    </>
  )
}

