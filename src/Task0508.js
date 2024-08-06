import React, {useState} from 'react'

const Task0508 = () => {
    const [bgColor, setBgColor] = useState('rgb(50,50,50)');
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
      };
    const changeBackgroundColor = () => {
        setBgColor(getRandomColor());
      };
  return (
    <div>
        <button style={{backgroundColor:bgColor}} onClick={changeBackgroundColor}></button>
    </div>
  )
}

export default Task0508