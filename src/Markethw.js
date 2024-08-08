import React, { useState } from 'react'

const Markethw = () => {
    const products = [{id:0, desc:"apple", price:3},
                {id:1, desc:"rice", price:10},
                {id:2, desc:"milk", price:7}];
    const [cart, setCart] = useState([])
    
    const addToCart = (prod, delta) => {
        console.log("you try to do");
        if (delta == 1){
            console.log("you are adding");          
            if (isProductInCart(prod.id))
                setCart(cart[prod.id].amount += delta)
            else
                setCart(...cart, prod)
        }
        console.log(cart);
        
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
             <div><h3>Title: {prod.desc}, Price: {prod.price}</h3><button onClick={addToCart(prod, 1)}>ADD</button></div>)}
             <hr></hr>
             <h3>CART:</h3>
    </div>
  )
}

export default Markethw