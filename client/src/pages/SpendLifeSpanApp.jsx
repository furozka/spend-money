import React from 'react'
import LifeSpanBar from '../components/LifeSpanBar'
import Products from '../components/Products'
import { useSelector } from 'react-redux'
import Recipe from '../components/Recipe'
import { selectTotalItemsCount } from '../redux/products/productsSlice'

const SpendLifeSpanApp = () => {
  const totalItemsCount = useSelector(selectTotalItemsCount)
  return (
    <div className=''>
        <LifeSpanBar/>
        <Products/>
        {
          totalItemsCount>0 && <Recipe/>
        }
    </div>
  )
}

export default SpendLifeSpanApp