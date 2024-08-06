import React, {useState} from 'react'

const Market = () => {
    const [descTemp, setDescTemp] = useState("")
    const [amountTemp, setAmountTemp] = useState(0)
    const [priceTemp, setPriceTemp] = useState(0)
    const [totalCost, settotalCost] = useState(0)
    const [cart, setCart] = useState([])
    const [amountToAdd, setamountToAdd] = useState(0)

    const buyProduct = () => {
        if(doesProductExist(descTemp)){   
            setCart(cart[descTemp].amount += amountTemp)
        }
        else{
            console.log(amountTemp);   
            setCart([...cart, {"desc":descTemp, "amount":amountTemp, "price":priceTemp} ])
        }

        console.table(cart);
    } 
    

    const doesProductExist = (descTemp) => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].desc === descTemp) {
                return true
            }    
        }
        return false
    }

  return (
    <div>
        Desc: <input type='text' onChange={(e) => setDescTemp(e.target.value)}></input>
        Amount: <input type='number' onChange={(e) => setAmountTemp(e.target.value)}></input>
        Price: <input type='number' onChange={(e) => setPriceTemp(e.target.value)}></input><br></br>
        <button onClick={buyProduct}>BUY</button>
        <h3>Total cost: </h3> 
        <h3>Number of products: </h3> 
    </div>
  )
}

export default Market