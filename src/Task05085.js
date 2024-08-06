import React, { useState } from 'react'

const Task05085 = () => {
    const [cart, setCart] = useState([])
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState(0)
  return (
    <div>
        <input type='text' onChange={(e) => setDesc(e.target.value)}></input>
        <input type='number' onChange={(e) => setPrice(e.target.value)}></input>
        <button onClick={() => setCart(...cart, {"desc":desc,"price":price})}>BUY</button>
        <div>
          {cart.map(product => 
            <h2>{product.desc} ----- {product.price}</h2>
          )}
        </div>
        
    </div>
  )
}

export default Task05085