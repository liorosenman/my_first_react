import React, { useState } from 'react'

const Task05083 = () => {
  const [products, setProduct] = useState([])
  const [tempProduct, setTempProduct] = useState("")
  return (
    <div>
        <input type='text' onChange={setTempProduct}></input>
        <button>BUY</button>
        <div>
        {products.map(product => <div>product</div>)}
        </div>
    </div>
  )
}

export default Task05083