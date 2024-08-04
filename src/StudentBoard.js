import React from 'react'
import StudentCard from './StudentCard'
import { useState } from 'react'

const StudentBoard = () => {
    const [students,setstudents] = useState([
        {name:"harry", age:14, study:"math", image:"C:\LIOR\python\pictures\pic1"},
        {name:"ron", age:17, study:"magic", image:"C:\LIOR\python\pictures\pic2"},
        {name:"hermayoni", age:20, study:"bible", image:"C:\LIOR\python\pictures\pic3"},
       
    ])
  return (
    <div>
        {students.map(student => <StudentCard student={student}></StudentCard>)}
    </div>
  )
}

export default StudentBoard