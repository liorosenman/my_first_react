import React from 'react'

const StudentCard = ({student}) => {
  return (
    <div>
        <h3>{student.name}</h3>
        <h3>{student.age}</h3>
        <h3>{student.study}</h3>
        <img src={student.image} alt='problem'></img>
        <hr></hr>
    
    </div>
  )
}

export default StudentCard