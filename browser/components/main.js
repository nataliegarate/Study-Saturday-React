import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './studentlist'
import StudentDetail from './studentDetail'

export default class Main extends Component {
  //why are we passing props here (an empty object), works with or without
  constructor(props) {
    super(props);
    this.state = {
      //must initialize with the type of data you will eventually put there
      students: [],
      selectedStudent: {},
    };
    this.getStudents = this.getStudents.bind(this)
    this.selectedStudent = this.selectedStudent.bind(this)
  }

  //the first initial view
  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const {data}  = await axios.get('/student')

      /*axios.get will always return and object with your request being on the 'data' property in the form of an array, ie
      {data: [{name:'Natalie'}, {name:'Sam'}, {name: 'Puggles'}.......]}
      there are other properties too, (ie status) so its best to return just the data by deconstructing your object: {data}

    */
      this.setState({students: data})
      //^changes the state: (this.state)
    } catch (err) {
      console.error(err);
    }
  }

    selectedStudent(student) {
      this.setState({selectedStudent: student})
  }

  render() {
    return (
      <div>
          <StudentList students = {this.state.students} state = {this.selectedStudent} />
         {this.state.selectedStudent.id ? (
          <StudentDetail student = {this.state.selectedStudent} />
        ) : null}
      </div>
    )
  }
}
