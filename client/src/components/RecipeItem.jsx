import React from 'react'

const RecipeItem = ({product}) => {
    
  return (
    <div className=''>

        <p>Name: {product.name}-----Count: {product.count}-----Unit Price: {product.price}----Total Price: {product.count*product.price}</p>

    </div>
  )
}

export default RecipeItem