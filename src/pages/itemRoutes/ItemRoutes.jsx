import React from 'react'
import { Route } from 'react-router-dom'
import Item from '../item/Item'

const ItemRoutes = () => {
  return (
    <Route>
        <Route path='/1' element={<Item/>}/>
    </Route>
  )
}

export default ItemRoutes