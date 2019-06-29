import React, { Component } from 'react';


function StudentList (props){
  return (
  <div>
  <h1> Students </h1>
  <table>
    <tbody>
      <tr>
        <th>First Name</th>
        <th> Test </th>
      </tr>
      {props.students.map(student => {
        return (<tr key= {student.id}>
                 <td> {student.fullName} </td>
                  <td onClick ={() => props.state(student)}> Details </td>
                </tr>
              )
     })}
    </tbody>
  </table>
  </div>
  )
}

export default StudentList
