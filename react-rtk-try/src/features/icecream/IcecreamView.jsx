import React from 'react'
import { useSelector } from 'react-redux'

const IcecreamView = () => {
  const numberOfIcecreams =useSelector((state)=>state.icecream.numberOfIcecreams)
  return (
    <div>
      <h2>Number of Ice creams-{numberOfIcecreams}</h2>
      <button>Order Ice cream</button>
      <button>Restock Ice creams</button>
    </div>
  )
}

export default IcecreamView
