import React from 'react'
import { useSelector } from 'react-redux'

const CakeView = () => {
  const NumberOfCakes = useSelector((state)=>state.cake.NumberOfCakes)
  return (
    <div>
      <h2>Number of Cakes-{NumberOfCakes}</h2>
      <button>Order cake</button>
      <button>Restock Cakes</button>
    </div>
  )
}

export default CakeView
