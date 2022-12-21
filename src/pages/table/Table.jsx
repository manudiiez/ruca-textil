import React, { useState } from 'react'
import './table.css'

const Table = ({producto}) => {
    const [tablasrc, setTablasrc] = useState(producto.tablasrc);
    console.log(producto);
  return (
    <div id='table'>
        <h1>{producto.name}</h1>
        <div>
            <p>{producto.category}</p>
            >
            <p>{producto.name}</p>
            >
            <p>table</p>
        </div>
        <img src={tablasrc} alt="" />
    </div>
  )
}

export default Table