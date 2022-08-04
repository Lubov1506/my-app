import React, { Component } from 'react'

class WorkerList extends Component { 
constructor(props){
    super(props)
    this.state = {
        newDays: this.props.days,
        newRate: this.props.rate,
        salary: this.props.days*this.props.rate
    }
}
salaryCalc = (event) =>{
event.preventDefault()
this.setState({
salary: event.target.days.value*event.target.rate.value
})
}
    rows = ({ id, firstName, lastName, days, rate }) => {
    return <tr key={id}>
      <td>
        {firstName}
        {lastName}
      </td>
      <td><input  type='text' defaultValue={days} name='days'/></td>
      <td><input type='text' defaultValue={rate} name='rate'/></td>
      <td>{this.salaryCalc}</td>
    <td><button onClick={this.salaryCalc}>New salary</button></td>
    </tr>
  }


    render(){
   const {workers} = this.props
  return (
    <>
      <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Days</td>
                <td>Rate</td>
                <td>Salary</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            {workers.map(this.rows)}
        </tbody>
        </table>
    </>
  )}
}

export default WorkerList
