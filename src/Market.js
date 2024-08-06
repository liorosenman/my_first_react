import React, {useState} from 'react'

const Market = () => {
    const [descTemp, setDescTemp] = useState("")
    const [amountTemp, setAmountTemp] = useState(0)
    const [priceTemp, setPriceTemp] = useState(0)
    const [totalCost, settotalCost] = useState(0)
    const [cart, setCart] = useState([])
    const [amountToAdd, setamountToAdd] = useState(0)
    const [index, setIndex] = useState(-1)
    const [updatedCart, setUpdatedCart] = useState([])

    const buyProduct = (descTemp, amountTemp, priceTemp) => {
    //    console.log(descTemp, amountTemp, priceTemp)
        setIndex(doesProductExist(descTemp))
        console.log(index);
        if(index != -1){  
            console.log("exists");            
            setUpdatedCart(...cart)
            setUpdatedCart(updatedCart[index].amount += parseInt(amountTemp));
            setCart(updatedCart);
        }
        else{  
            console.log("new product");          
            setCart([{desc:descTemp, amount:parseInt(amountTemp), price:parseInt(priceTemp)}, ...cart])
        }

        console.table(cart);
    } 
    
    const doesProductExist = (descTemp) => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].desc === descTemp) {
                return i
            }    
        }
        return -1
    }

  return (
    <div>
        Desc: <input type='text' onChange={(e) => setDescTemp(e.target.value)}></input>
        Amount: <input type='number' onChange={(e) => setAmountTemp(e.target.value)}></input>
        Price: <input type='number' onChange={(e) => setPriceTemp(e.target.value)}></input><br></br>
        <button onClick={()=>buyProduct(descTemp, amountTemp, priceTemp)}>BUY</button>
        <h3>Total cost: </h3> 
        <h3>Number of products: </h3> 
    </div>
  )
}

export default Market