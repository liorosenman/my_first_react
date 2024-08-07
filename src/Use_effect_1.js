import React, {useEffect, useState} from 'react'

const Use_effect_1 = () => {
    const [var1, setvar1] = useState(0)
    const [var2, setvar2] = useState(0)
    const [var3, setvar3] = useState(0)

    useEffect(() => {
      console.log("var1 has changed");
    }, [var1])

    useEffect(() => {
        console.log("var2 has changed");
      }, [var2])

      useEffect(() => {
        console.log("var3 has changed");
      }, [var3])
    

  return (
    <div>
        <button onClick={() => setvar1(var1+=2)}>Change var1</button>
    </div>
  )
}

export default Use_effect_1