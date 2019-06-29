import React, { Component } from 'react';


function StudentDetail (props) {
  console.log(props.student)
  return (<div> {props.student.email} </div>)
}
export default StudentDetail
