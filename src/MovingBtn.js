import React, { useState, useEffect } from 'react'

const MovingBtn = () => {
    const [yLocation, setYLocation] = useState(100)
    const [xLocation, setXLocation] = useState(100)
    const [deltaX, setdeltaX] = useState(20)
    const [deltaY, setdeltaY] = useState(20)
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    useEffect(() => {
      const intervalId = setInterval(() => {
          moveBtn();
      }, 50);

      return () => clearInterval(intervalId); // Clear interval on component unmount
    }, [xLocation, yLocation, deltaX, deltaY]); // Add depend

    // setInterval(() => {
    //     moveBtn()
    // }, 1000)

    const moveBtn = () => {
        if (yLocation + deltaY >= screenHeight || yLocation + deltaY <= 0)
            setdeltaY(-deltaY)
        if (xLocation + deltaX >= screenWidth || xLocation + deltaX <= 0)
            setdeltaX(-deltaX)
        let newXLocation = xLocation + deltaX;
        let newYLocation = yLocation + deltaY;
        setXLocation(newXLocation);
        setYLocation(newYLocation);
    }

  return (
    <div>
        <button style={{position:'absolute', top:`${yLocation}px`, left:`${xLocation}px`}}>Button</button>
    </div>
  )
}

export default MovingBtn