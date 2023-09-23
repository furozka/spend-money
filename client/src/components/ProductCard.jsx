import React, { useState } from 'react'
import { useLifeAmount } from '../context/LifeAmountContext';
import { useDispatch } from 'react-redux';
import { setCount } from '../redux/products/productsSlice';

const ProductCard = ({product}) => {
  const dispatch = useDispatch()
    const {lifeAmount, setLifeAmount} = useLifeAmount()
    const [inputAmount, setInputAmount] = useState(0);


    const handleChange = (e)=>{
      console.log("handle change worked")
      let newValue = Math.floor(Number(e.target.value))
      console.log("new value:", newValue)
      const lifeAmountHolder = lifeAmount.amount + (product.price*inputAmount)
      const maxAmountBuy = Math.floor(lifeAmountHolder/product.price)
      console.log("max amount buy: ", maxAmountBuy)
      if(maxAmountBuy<newValue) newValue=maxAmountBuy
      const difference = (newValue-inputAmount)
      if(difference>0){
      
          handleBuy(difference); 
       
      }else{
       
          handleSell(Math.abs(difference)); 
       
      }

     setInputAmount(newValue)
    }

    const handleSell = (sellCount=1)=>{
      setInputAmount(inputAmount-sellCount)
      setLifeAmount((prev)=>({...prev, amount: prev.amount+sellCount*product.price}))
      dispatch(setCount({id: product.id, count: -sellCount}))
    }

    const handleBuy = (buyCount=1)=>{
      setInputAmount(inputAmount + buyCount);
      setLifeAmount((prev)=>({...prev, amount: prev.amount-buyCount*product.price}))
      dispatch(setCount({id: product.id, count: buyCount}))
    }

   
  return (
    <div className='bg-gray-200 w-full flex justify-between items-center'>
        <div className='bg-white w-full p-5 flex flex-col items-center justify-center'>
            <img className='object-cover' src="https://placehold.co/150x150" alt="img" />
            <p className='font-bold text-black text-2xl mt-2'>{product.name}</p>
            <p className='font-bold text-green-400 text-1xl my-1'>{product.price}</p>
            <div className='flex justify-around items-center w-full'>
                <button onClick={()=>handleSell()} disabled={inputAmount<1} className={`w-10 h-10 ${inputAmount<1 ? " bg-gray-200" : "bg-red-600"} py-3 px-10 flex items-center justify-center rounded-md font-bold`}>Sell</button>
                <input onWheel={(e)=> e.target.blur()} onChange={(e)=>handleChange(e)} className='w-40 h-10 sm:w-20  bg-gray-200 flex items-center justify-center text-center p-3 rounded-md' type='number' value={product.count>0 ? product.count: ""} ></input>
                <button disabled={product.price>lifeAmount.amount} onClick={()=>handleBuy()} className={`w-10 h-10 ${product.price>lifeAmount.amount ? "bg-gray-200" : "bg-green-400"}  py-4 px-10 flex items-center justify-center rounded-md font-bold text-white `}>Buy</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard