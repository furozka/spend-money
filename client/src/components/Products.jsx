import React from 'react'
import ProductCard from './ProductCard'
import { selectProducts } from '../redux/products/productsSlice'
import {useSelector} from "react-redux"

const Products = () => {
    const products = useSelector(selectProducts)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4'>
        {
            products.map((product)=>{
                return (<ProductCard key={product.id} product={product}/>)
            })
        }
    </div>
  )
}

export default Products