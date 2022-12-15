import React from 'react'
import { useParams } from 'react-router-dom'

const Item = () => {

    const {category, id} = useParams()

  return (
    <div>
        <p>{category}</p>
        <p>{id}</p>
    </div>
  )
}

export default Item