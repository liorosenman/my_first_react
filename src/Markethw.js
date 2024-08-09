import React, { useEffect, useState } from 'react'

const Markethw = () => {
    const products = [{id:0, desc:"apple", price:3},
                {id:1, desc:"rice", price:10},
                {id:2, desc:"milk", price:7}];
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        console.table(cart)
        calcTotal(cart)
    }, [cart])
    
    
    const addToCart = (prod, delta) => {
        let index = isProductInCart(prod.id)
        if (delta == 1){          
            if (index != -1){
                let tempProduct = cart[index];
                tempProduct.amount += delta
                setCart([...cart])
            }else{
                prod.amount = 1
                setCart([...cart, prod])
            }
        }
        else{
            console.log("This is reduction");          
            let tempProduct = cart[index]
            tempProduct.amount += delta
            if(tempProduct.amount == 0)
                setCart([...cart.filter(item => item.id != prod.id)])
            else
                setCart([...cart])     
    }
}

    const isProductInCart = (idToCheck) => {
        for (let i = 0; i < cart.length; i++)
            if (idToCheck == cart[i].id)
                return i;
        return -1;
    }

    const calcTotal = (cart) => {
        let newTotal = 0;
        cart.forEach(prod => {
            newTotal += prod.price * prod.amount;
        });
        setTotal(newTotal);
    }
    
  return (
    <div>
            {products.map(prod =>
             <div key={prod.id}><h3>Title: {prod.desc}, Price: {prod.price}</h3><button onClick={() => addToCart(prod, 1)}>ADD</button></div>)}
             <hr></hr>
             <h3>CART --- SUM: {total} NIS </h3>
             <div>
            {cart.map(prod =>
            <div>
                <button onClick={() => addToCart(prod, -1)}>-</button>
                {prod.desc}, {prod.price}, {prod.amount}
                <button onClick={() => addToCart(prod, 1)}>+</button>
             </div>
            )}</div>
    </div>
  
)
}

export default Markethw
