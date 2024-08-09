import React, { useEffect, useState } from 'react'

const Markethw = () => {
    const products = [{id:0, desc:"apple", price:3},
                {id:1, desc:"rice", price:10},
                {id:2, desc:"milk", price:7}];
    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log("Cart changed")
    }, [cart])
    
    
    const addToCart = (prod, delta) => {
        if (delta == 1){          
            if (isProductInCart(prod.id)){
                let tempProduct = cart[]
                tempProduct.amount += delta
                setCart([...cart])
            }else
                setCart([...cart, prod])
        }
        else{
            let tempProduct = cart[prod.id]
            tempProduct.amount += delta
            if(tempProduct.amount == 0){
                let updatedCart = cart.filter(item => item.id != prod.id)
            setCart([...cart, updatedCart])}       
    }
}

    const isProductInCart = (idToCheck) => {
        for (let i = 0; i < cart.length; i++)
            if (idToCheck == cart[i].id)
                return true;
        return false;
    }
    
  return (
    <div>
            {products.map(prod =>
             <div key={prod.id}><h3>Title: {prod.desc}, Price: {prod.price}</h3><button onClick={addToCart(prod, 1)}>ADD</button></div>)}
             <hr></hr>
             <h3>CART:</h3>
    </div>
  )
}

export default Markethw
