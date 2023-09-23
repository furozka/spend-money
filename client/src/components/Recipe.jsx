import React from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../redux/products/productsSlice'
import RecipeItem from './RecipeItem'
import { useLifeAmount } from '../context/LifeAmountContext'

const Recipe = () => {
    const products = useSelector(selectProducts)
    const {lifeAmount} = useLifeAmount()
  return (
    <div>
        <h3 className='text-green-700 text-3xl text-center'>RECIPE</h3>
    <div className='grid grid-cols-12 gap-4 p-5 bg-green-600'>
        <div className='col-span-10'>
        {
            products.map((product)=>{
                if(product.count>0){
                    return (<RecipeItem product={product}/>)
                }
                return false
            })
        }
        </div>
        <div className='col-span-2 '>{lifeAmount.amount}</div>
    </div>
    </div>
  )
}

export default Recipe